import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Root/Context/AuthProvider";

const Header = () => {
  const {logout, user} = useContext(AuthContext)

  const handleLogout = () => {
    try {
      logout();
      // Handle successful logout
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error
    }
  };
  

  
  return (
    <header className="bg-black py-3">
      <div className="w-4/5 m-auto flex justify-between items-center text-slate-100">

        <div className="logo">
          <Link to="/">Dipu</Link>
        </div>

        <div className="menu">
          <nav>
            <ul className="flex uppercase">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              {
                user?.uid ?
                <>
                  <li>
                    <Link to="" >{user.displayName}</Link>
                  </li>
                  <li>
                    <Link to="" onClick={handleLogout}>Logout</Link>
                  </li>
                </>
                :
                <>
                  <li>
                    <Link to="/Registration">Registration</Link>
                  </li>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                </>
              }              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
