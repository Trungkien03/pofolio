import { useState } from "react";
import "./Navbar.css";
import sun from "../../assets/svg/sun.svg";
import moon from "../../assets/svg/moon.svg";
import { useTheme } from "../ThemeContext";
import CV from "../../assets/cv.pdf";
import { Link } from "react-router-dom";

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
        <img src="/hero-img.png" alt="hero" className="image" />
        <h2>Nguyễn Trung Kiên</h2>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/">
            <h4>About</h4>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <h4>Projects</h4>
          </Link>
        </li>

        <li>
          <Link to="/work">
            <h4>Work</h4>
          </Link>
        </li>

        <li>
          <a href="#contact">
            <h4>Contact</h4>
          </a>
        </li>
        <li>
          <a href={CV} download>
            <h4>Resume</h4>
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
