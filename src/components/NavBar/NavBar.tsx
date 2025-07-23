import "./NavBar.css";
import Logo from "../../assets/images/logo.svg"
import LightTheme from "../../assets/images/sun.png";
import DarkTheme from "../../assets/images/moon.png";
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleTheme } from "../../store/features/theme/themeSlice";
import profileDark from "../../assets/images/profile-dark.png"
import profileLight from "../../assets/images/profile-light.png"

export default function NavBar() {
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector((state) => state.theme.mode);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

useEffect(() => {
        // Remove existing theme classes to prevent conflicts
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        // Add the new theme class based on the current mode
        document.documentElement.classList.add(currentMode === 'dark' ? 'dark-theme' : 'light-theme');
    }, [currentMode]);

    useEffect(() =>{
      
    },[isAuthenticated]);
  return (
    <nav className="navbar-container">
    <section className="navbar-logo">
    <img src={Logo} alt="Crypto Tracker Logo"  />
    <h1>Crypto Tracker</h1>
    </section>
      <ul className="nav-list">
        <li>Dashboard</li>
        <li>Watchlist</li>
        <li>Portfolio</li>
        <li>Settings</li>
      </ul>
        <ul className="nav-list navbar-right">
          <li>{isAuthenticated ? <img  src={currentMode=="dark"?profileLight : profileDark}></img> : "Sign In/Sign Up"}</li>
          <li>Notification</li>
          <li><img src={currentMode == "dark" ? LightTheme : DarkTheme} onClick={() => dispatch(toggleTheme())}alt=""  /></li>
        </ul>
    </nav>
  )
}
