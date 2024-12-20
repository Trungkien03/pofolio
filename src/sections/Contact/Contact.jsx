import styles from "./ContactStyles.module.css";
import facebookDark from "../../assets/svg/facebook-dark.svg";
import facebookLight from "../../assets/svg/facebook-light.svg";
import githubDark from "../../assets/svg/github-dark.svg";
import githubLight from "../../assets/svg/github-light.svg";
import linkedinDark from "../../assets/svg/linkedin-dark.svg";
import linkedinLight from "../../assets/svg/linkedin-light.svg";
import hackerrankDark from "../../assets/svg/hackerrank-dark.svg";
import hackerrankLight from "../../assets/svg/hackerrank-light.svg";
import leetcodeDark from "../../assets/svg/leetcode-dark.svg";
import leetcodeLight from "../../assets/svg/leetcode-light.svg";
import { useTheme } from "../../common/ThemeContext";

function Contact() {
  const { theme } = useTheme();
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const facebookIcon = theme === "light" ? facebookLight : facebookDark;
  const leetCodeIcon = theme === "light" ? leetcodeLight : leetcodeDark;
  const hackerrankIcon = theme === "light" ? hackerrankLight : hackerrankDark;

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.name}>Nguyen Trung Kien</h3>
          <p className={styles.role}>Frontend Developer - Mobile Developer</p>
          <p className={styles.contact}>
            Phone: <a href="tel:+84974102437">+84 974 102 437</a>
          </p>
          <p className={styles.contact}>
            Email:{" "}
            <a href="mailto:kiennt.it.work@gmail.com">
              kiennt.it.work@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.links}>
          <p>FIND ME IN</p>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/kiennguyen0310/" target="_blank">
              <img src={facebookIcon} alt="facebook icon" />
            </a>
            <a href="https://www.linkedin.com/in/kane03" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://github.com/Trungkien03" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://leetcode.com/u/Trungkien03" target="_blank">
              <img src={leetCodeIcon} alt="Github icon" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/trungkiennguyen4"
              target="_blank"
            >
              <img src={hackerrankIcon} alt="Github icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
