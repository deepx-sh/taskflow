import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please fill the all field");
      return;
    }
    const result = handleLogin(email, password)
    if (!result) {
      setError("Invalid email or password")
    }
    setEmail("");
    setPassword("")
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white px-4">
      <div className="border- border-emerald-600/40 bg-[#111] rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.15)] p-8 sm:p-10 w-full max-w-sm backdrop-blur-sm ">
        <h2 className="text-2xl font-semibold text-center mb-6 text-emerald-400 tracking-wide">
          Login
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20  border border-red-500/50 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}
        <form action="" className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            className="border border-emerald-600/40 rounded-full py-2.5 px-4 text-base  bg-[#1a1a1a] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="Enter your email"
          />
          <input
            className="border border-emerald-600/40 rounded-full py-2.5 px-4 text-base  bg-[#1a1a1a] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            placeholder="Enter your password"
          />
          <button className="mt-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-full text-base transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_10px_rgba(16,185,129,0.4) cursor-pointer">
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-gray-400">
          <p>Admin: admin@me.com / 123</p>
          <p>Employee: employee1@example.com / 123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
