import Backend from "./Backend";
import FrontEnd from "./FrontEnd";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My technical level</span>
      <div className="skills-container container grid">
        <FrontEnd></FrontEnd>
        <Backend></Backend>
      </div>
    </section>
  );
};

export default Skills;
