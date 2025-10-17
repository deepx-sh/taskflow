import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen  w-full">
      <Header />
      <CreateTask/>
     
    </div>
  );
};

export default AdminDashboard;
