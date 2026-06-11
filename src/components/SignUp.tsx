import { useState } from "react";
import logo from "../images/logo.png";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleBack } from "../store/logsSlice/logSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { updateProfile } from "firebase/auth";

export default function SignUp({
  setLogin,
}: {
  setLogin: (value: boolean) => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: firstName,
      });

      toggleLogs();
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("this is the current error : ", error);
    }
  };

  const dispatch = useDispatch();

  const showLogin = () => {
    setLogin(true);
    dispatch(toggleBack());
  };

  const toggleLogs = () => {
    dispatch(toggleBack());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 sm:p-8 rounded-md shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-auto">
        <button
          onClick={toggleLogs}
          className="absolute top-3 right-3 text-gray-500"
          aria-label="Close"
        >
          <FaRegTimesCircle size={20} />
        </button>

        <header className="flex flex-col items-center mb-4 text-center">
          <img src={logo} alt="logo" className="h-10 mb-2" />
          <h1 className="text-lg font-semibold">Create an account</h1>
        </header>

        <form onSubmit={register}>
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="First name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Email address"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="rounded-md outline-none border-gray-300 border-[1.5px] w-full py-2 px-3 mb-4"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#3084A9] text-white rounded-md capitalize"
          >
            Create Account
          </button>
          <p className="text-[#757C86] mt-4 text-center">
            Already have an account?
            <span
              onClick={showLogin}
              className="text-[#3084A9] ml-1 cursor-pointer"
            >
              Sign in here
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
