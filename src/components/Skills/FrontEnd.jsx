// import ProgressBar from "@ramonak/react-progress-bar";
const FrontEnd = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Front end developer</h3>
      {/* <ProgressBar completed={80} /> */}
      <div className="skills-box">
        <div className="skills-group">
                <div className="skills-data">
                <box-icon className='box-icon' name='badge-check'></box-icon>
                <div>
                  <h3 className="skills-name">HTML</h3>
                  <span className="skills-level">Basic</span>
                </div>
                </div>
                <div className="skills-data">
                <box-icon className='box-icon' name='badge-check'></box-icon>
                <div>
                  <h3 className="skills-name">CSS</h3>
                  <span className="skills-level">Advanced</span>
                </div>
                </div>
                <div className="skills-data">
                <box-icon className='box-icon' name='badge-check'></box-icon>
                <div>
                  <h3 className="skills-name">JavaScript</h3>
                  <span className="skills-level">Intermediate</span>
                </div>
                </div>
               
                
        </div>
        <div className="skills-group">
               
                <div className="skills-data">
                <box-icon name='badge-check'></box-icon>
                <div>
                  <h3 className="skills-name">Bootstrap</h3>
                  <span className="skills-level">Intermediate</span>
                </div>
                </div>
                <div className="skills-data">
                <box-icon name='badge-check'></box-icon>
                <div>
                  <h3 className="skills-name">Git</h3>
                  <span className="skills-level">Intermediate</span>
                </div>
                </div>
                <div className="skills-data">
                <box-icon name='badge-check'></box-icon>
                <div>
                  <h3 className="skills-name">React</h3>
                  <span className="skills-level">Intermediate</span>
                </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
