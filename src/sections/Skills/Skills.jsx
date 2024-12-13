import reactHookForm from "../../assets/react-hook-form.png";
import css from "../../assets/svg/css.svg";
import git from "../../assets/svg/git.svg";
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
import styles from "./SkillsStyles.module.css";

import checkmarkDark from "../../assets/svg/checkmark-dark.svg";
import checkmarkLight from "../../assets/svg/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();

  const checkmark = theme === "light" ? checkmarkLight : checkmarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h3>Programming Languages</h3>
      <div className={styles.skillList}>
        <SkillList src={typescript} skill="TypeScript" />
        <SkillList src={swift} skill="Swift" />
        <SkillList src={swift} skill="Java" />
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
      <h3>Others</h3>
      <div className={styles.skillList}>
        <SkillList src={webpack} skill="Webpack" />
        <SkillList src={git} skill="Git" />
        <SkillList src={git} skill="Docker" />
      </div>
    </section>
  );
}

export default Skills;
