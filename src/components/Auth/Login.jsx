import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white px-4">
      <div className="border- border-emerald-600/40 bg-[#111] rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.15)] p-8 sm:p-10 w-full max-w-sm backdrop-blur-sm ">
        
              <h2 className="text-2xl font-semibold text-center mb-6 text-emerald-400 tracking-wide">Login</h2>
              <form
          action=""
          className="flex flex-col gap-4"
        >
          <input
            className="border-2 border-emerald-600 rounded-full py-3 px-4 text-xl  outline-none bg-transparent placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="border-2 border-emerald-600 rounded-full py-3 px-4 text-xl outline-none bg-transparent placeholder:text-gray-500"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-none bg-emerald-600 rounded-full py-3 px-4 text-xl  outline-none text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
