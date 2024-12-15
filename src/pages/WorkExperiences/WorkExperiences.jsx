import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";
import WorkExperienceCard from "./components/WorkExperienceCard";
import experiences from "./data/experiences";
import "./WorkExperiences.css";

const WorkExperiences = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <h1>
            Insights on Web and Mobile Development, Emerging Technologies, and
            Tech Innovations.
          </h1>
          <p>
            Articles, essays, and reflections on creative application
            development and the ever-evolving world of technology.
          </p>
        </div>
        <div className="work-experiences">
          {experiences.map((exp, index) => (
            <WorkExperienceCard
              key={index}
              date={exp.date}
              title={exp.title}
              description={exp.description}
              link={exp.link}
              images={exp.images}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkExperiences;
