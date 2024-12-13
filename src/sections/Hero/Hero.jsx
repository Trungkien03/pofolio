import heroImg from "../../assets/profile_img.jpg";
import styles from "./HeroStyles.module.css";

import CV from "../../assets/cv.pdf";
import facebookDark from "../../assets/facebook-dark.svg";
import facebookLight from "../../assets/facebook-light.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme } = useTheme();

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const facebookIcon = theme === "light" ? facebookLight : facebookDark;

  return (
    <section className={styles.container}>
      <div id="hero" className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
      </div>
      <div className={styles.info}>
        <h1>Nguyen Trung Kien</h1>
        <h2>Frontend Developer - Mobile Developer</h2>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://www.facebook.com/kiennguyen0310/" target="_blank">
            <img src={facebookIcon} alt="facebook icon" />
          </a>

          <a href="https://github.com/Trungkien03" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/kane03" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          As a final-year student at FPT University with internship experience
          at FPT Software, I specialize in web and mobile development. I bring
          strong English communication skills and a solid foundation in software
          development, making me an effective team player and a valuable asset
          as a Junior Software Developer.
        </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
