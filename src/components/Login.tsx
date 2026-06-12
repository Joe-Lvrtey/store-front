import logo from "../images/logo.png";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setActive } from "../store/logsSlice/logSlice";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { getAuthErrorMessage } from "../lib/authErrorMessages";

export default function Login({
  setLogin,
}: {
  setLogin: (value: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both your email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setError("");
      closeLogin();
    } catch (error) {
      setError(getAuthErrorMessage(error));
    }
  };

  const dispatch = useDispatch();

  // const toggleLogs = () => {
  //   dispatch(toggleBack());
  // };

  const showSingUp = () => {
    dispatch(setActive());
    setLogin(false);
  };

  const closeLogin = () => {
    setLogin(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 sm:p-8 rounded-md shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-auto">
        <button
          onClick={closeLogin}
          className="absolute top-3 right-3 text-gray-500"
          aria-label="Close"
        >
          <FaRegTimesCircle size={20} />
        </button>

        <header className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold">Login to</h1>
          <img src={logo} alt="logo" className="h-10" />
        </header>

        <form onSubmit={login}>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            type="text"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Email address"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError("");
            }}
            type="password"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#3084A9] text-white rounded-md"
          >
            Login
          </button>
          <p className="text-[#757C86] mt-4 text-center">
            Don't have an account?
            <span
              className="text-[#3084A9] ml-1 cursor-pointer"
              onClick={showSingUp}
            >
              Sign up
            </span>
          </p>
          <div className="text-center">
            {error && (
              <span className="text-red-500 font-mono text-base font-bold">
                {error}
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
