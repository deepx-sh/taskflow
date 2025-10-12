import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#111] px-6 py-5 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.15)] border border-emerald-700/30">
      <h1 className="text-2xl text-gray-300 font-medium leading-snug">
        Hello <br />
        <span className="text-3xl font-semibold text-emerald-400">Deep👋🏻</span>
      </h1>
      <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-base font-medium px-6 py-2.5 rounded-full shadow-[0_0_10px_rgba(185,16,100,0.4)] transform transition-all duration-200 hover:scale-[1.05] active:scale-[0.97] cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Header;
