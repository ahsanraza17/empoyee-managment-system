import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(emailValue, passValue)
    setEmailValue("");
    setPassValue("");
    setShowPassword(false)
  }

  const passwordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center justify-center flex-col gap-10 border-2 rounded-xl border-red-600 p-16">
        <div>
          <h1 className="text-[30px] font-bold">Log In</h1>
        </div>
        <form
          onSubmit={submitHandler}
          autoComplete="off"
          className="flex flex-col justify-center items-center gap-7"
        >
          <div className="relative border border-red-600 px-3 flex gap-1 items-center rounded-full w-80">
            <i className="fa-solid fa-user opacity-50 text-[12px]"></i>
            <input
              name="userEmail"
              autoComplete="off"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              required
              className="border-none bg-transparent p-1 outline-none email-input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="relative border border-red-600 px-3 py-1 flex gap-2 items-center rounded-full w-80">
            <i className="fa-solid fa-lock opacity-50 text-[12px]"></i>
            <input
              name="userPassword"
              autoComplete="new-password"
              value={passValue}
              onChange={(e) => setPassValue(e.target.value)}
              required
              className="bg-transparent outline-none password-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <i onClick={passwordVisibility} className="fa-solid fa-eye opacity-50 text-[12px] absolute right-3 top-[10px] cursor-pointer"></i>
          </div>
          <div className="flex items-center gap-16">
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="bg-red-600" />
              <p className="text-white/50 text-[15px]">Remember me</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-red-600 text-[15px] cursor-pointer">
                Forgot Password
              </p>
            </div>
          </div>
          <div className="w-full mt-2">
            <button
              type="submit"
              className="w-full py-2 bg-red-600 rounded-full font-bold"
            >
              Login In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
