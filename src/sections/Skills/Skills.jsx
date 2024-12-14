import java from "../../assets/java.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import reactHookForm from "../../assets/react-hook-form.png";
import sql from "../../assets/sql.png";
import sqlserver from "../../assets/sqlserver.png";
import checkmarkDark from "../../assets/svg/checkmark-dark.svg";
import checkmarkLight from "../../assets/svg/checkmark-light.svg";
import css from "../../assets/svg/css.svg";
import docker from "../../assets/svg/docker.svg";
import gitDark from "../../assets/svg/git-dark.svg";
import gitLight from "../../assets/svg/git-light.svg";
import html from "../../assets/svg/html.svg";
import jest from "../../assets/svg/jest.svg";
import nodejs from "../../assets/svg/nodejs.svg";
import primereact from "../../assets/svg/primereact.svg";
import reactNativeIcon from "../../assets/svg/react-native.svg";
import reactIcon from "../../assets/svg/react.svg";
import reduxToolkit from "../../assets/svg/redux-toolkit.svg";
import swift from "../../assets/svg/swift.svg";
import swiftui from "../../assets/svg/swiftui.svg";
import tailwindcss from "../../assets/svg/tailwindcss.svg";
import typescript from "../../assets/svg/typescript.svg";
import webpack from "../../assets/svg/webpack.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import styles from "./SkillsStyles.module.css";

function Skills() {
  const { theme } = useTheme();

  const checkmark = theme === "light" ? checkmarkLight : checkmarkDark;
  const gitIcon = theme === "light" ? gitLight : gitDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h3>Programming Languages</h3>
      <div className={styles.skillList}>
        <SkillList src={typescript} skill="TypeScript" />
        <SkillList src={swift} skill="Swift" />
        <SkillList src={java} skill="Java" />
        <SkillList src={sql} skill="SQL" />
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
      </div>
      <hr />
      <h3>Frameworks</h3>
      <div className={styles.skillList}>
        <SkillList src={reactIcon} skill="React" />
        <SkillList src={reactNativeIcon} skill="React Native" />
        <SkillList src={swiftui} skill="SwiftUI" />
        <SkillList src={tailwindcss} skill="Tailwind CSS" />
        <SkillList src={primereact} skill="Prime React" />
        <SkillList src={nodejs} skill="NodeJS" />
      </div>
      <hr />
      <h3>Third Party Libraries</h3>
      <div className={styles.skillList}>
        <SkillList src={reduxToolkit} skill="Redux Toolkit" />
        <SkillList src={reactHookForm} skill="React Hook Form + Yup" />
        <SkillList src={jest} skill="Jest" />
      </div>
      <hr />

      <h3>Pattern Design</h3>
      <div className={styles.skillList}>
        <SkillList src={checkmark} skill="Monolithic Architecture" />
        <SkillList src={checkmark} skill="Singleton Pattern" />
        <SkillList src={checkmark} skill="Atom Design" />
      </div>
      <hr />
      <h3>Database</h3>
      <div className={styles.skillList}>
        <SkillList src={sqlserver} skill="SQL Server" />
        <SkillList src={mysql} skill="MySQL" />
        <SkillList src={mongodb} skill="MongoDB" />
      </div>
      <hr />
      <h3>Others</h3>
      <div className={styles.skillList}>
        <SkillList src={webpack} skill="Webpack" />
        <SkillList src={gitIcon} skill="Git" />
        <SkillList src={docker} skill="Docker" />
      </div>
    </section>
  );
}

export default Skills;
