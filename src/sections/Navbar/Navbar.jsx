import { useState } from "react";
import "./Navbar.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";
import CV from "../../assets/cv.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

  // Lấy element navbar
  const navbar = document.querySelector(".navbar");

  // Thêm hoặc gỡ bỏ class khi cuộn
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled"); // Thêm nền khi cuộn xuống
    } else {
      navbar.classList.remove("scrolled"); // Làm trong suốt khi ở đầu trang
    }
  });

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
          <a href="#hero">
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="#projects">
            <p>Projects</p>
          </a>
        </li>
        <li>
          <a href={CV} download>
            <p>Resume</p>
          </a>
        </li>
        <li>
          <a href="#contact">
            <p>Contact</p>
          </a>
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
