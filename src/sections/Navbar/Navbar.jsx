import { useState } from "react";
import "./Navbar.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Pofolio</h2>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <img
            className="colorMode"
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
