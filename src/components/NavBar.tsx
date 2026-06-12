import { useState } from "react";
import logo from "../images/logo.png";
import { CgShoppingCart } from "react-icons/cg";
import Login from "./Login";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setActive } from "../store/logsSlice/logSlice";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export default function NavBar({ user }: { user: any }) {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.log.isActive);
  const cartCount = useSelector((state: RootState) =>
    state.cart.cart.reduce((total, item) => total + item.quantity, 0)
  );

  const [login, setLogin] = useState(false);

  const showLogs = () => {
    dispatch(setActive());
  };

  async function logout() {
    await signOut(auth);
  }

  return (
    <div>
      <div className="bg-[#3084A9] relative z-50">
        <nav className="flex justify-between items-center w-[90%] my-0 mx-auto py-4">
          <div className="">
            <Link to={"/"}>
              <img className="w-[200px] h-[66px]" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <h1 className="font-serif md:text-2xl lg:text-4xl font-bold text-white banner">
              cakes and more
            </h1>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:hidden">
              <Link to="/cart" className="flex items-center gap-1 rounded-sm bg-white/15 px-2 py-1 text-sm font-semibold text-white">
                <div className="relative">
                  <CgShoppingCart className="text-base" />
                  {cartCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                      {cartCount}
                    </span>
                  )}
                </div>
                cart
              </Link>
              <button
                onClick={showLogs}
                className="rounded-sm bg-white px-2.5 py-1 text-sm font-semibold text-[#3084A9]"
              >
                login/signup
              </button>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="flex gap-1 items-center">
                <div className="relative">
                  <CgShoppingCart className="text-white" />
                  {cartCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                      {cartCount}
                    </span>
                  )}
                </div>
                <Link to={"/cart"} className="capitalize text-white">
                  cart
                </Link>
              </div>
              {user ? (
                <div className="flex items-center gap-x-3">
                  <p className="text-white font-serif text-sm md:text-lg font-bold ml-2">
                    Welcome, {user.displayName || "User"}
                  </p>
                  <button
                    onClick={logout}
                    className="border-none rounded-sm bg-white text-[#3084A9] py-0.5 px-1.5 md:py-1 md:px-4 capitalize"
                  >
                    logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={showLogs}
                  className="border-none rounded-sm bg-white text-[#3084A9] py-1 px-3 capitalize"
                >
                  login/signup
                </button>
              )}
            </div>
          </div>
        </nav>

        {isActive && <SignUp setLogin={setLogin} />}
        {login && <Login setLogin={setLogin} />}
      </div>
    </div>
  );
}
