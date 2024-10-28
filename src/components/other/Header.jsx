import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = ({ data }) => {
  const { setUser } = useContext(AuthContext);
  const [confirm, setConfirm] = useState(false);

  const handleLogout = () => {
    setConfirm(true);
  };

  const handleApprove = () => {
    setUser(null);
    localStorage.setItem("userLoggedIn", JSON.stringify(""))
  };

  const handleDecline = () => {
    setConfirm(false);
  };

  return (
    <>
      <header className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-start leading-7">
          <h3 className="text-[20px] font-semibold">Hello,</h3>
          <div className="flex items-center gap-3">
            <h1 className="text-[30px] font-extrabold">{data?.name}</h1>
            <i className="fa-solid fa-hand text-[20px] mt-2"></i>
          </div>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded-md font-semibold bg-red-600 hover:bg-red-500 text-white"
          >
            Log Out
          </button>
        </div>
      </header>
      {confirm && (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-white/10">
          <div className="w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="pop-up w-96 flex items-center justify-center px-6 py-12 rounded-xl bg-black">
              <div className="flex flex-col items-center justify-center gap-8">
                <h2 className="text-[30px] font-bold">
                  Are you sure to logout?
                </h2>
                <div className="flex gap-5">
                  <button
                    onClick={handleApprove}
                    className="px-5 py-1 bg-red-600 text-[20px] font-bold rounded-md text-center hover:bg-red-500"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-5 py-1 bg-green-600 text-[20px] font-bold rounded-md text-center hover:bg-green-500"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
