import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { AuthContext } from "./context/AuthProviderContext";
import { getLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData,updateUserData,loading] = useContext(AuthContext);
  

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
  }, [])
  

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();

    const employee = employees.find(e => e.email === email && e.password === password);

    if (employee) {
      const userData = { role: 'employee', data: employee };
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify(userData));
      return true;
    }

    const adminUser = admin.find(a => a.email === email && a.password === password);
    if (adminUser) {
      const userData = { role: 'admin', data: adminUser };
      setUser('admin');
      setLoggedInUserData(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify(userData));
      return true;
    }

    return false;
    
  }

  const hanldeLogout = (role) => {
    setUser(null);
    setLoggedInUserData(null);
  }

  if (loading) {
    return (
      <div className=" min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  if (user === 'admin') {
    return <AdminDashboard changeUser={hanldeLogout}/>
  }
  return <EmployeeDashboard data={loggedInUserData} changeUser={hanldeLogout}/>

 
};

export default App;
