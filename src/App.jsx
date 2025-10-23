import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProviderContext";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData.employees);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      console.log("This is Admin");
      setUser('admin');
    } else if (authData && authData.employees.find((e)=> email==e.email && password==e.password)) {
      console.log("This is User");
      setUser('employee')
    } else {
      alert("Invalid Credentials");
      
    }
  }

  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user=='admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  );
};

export default App;
