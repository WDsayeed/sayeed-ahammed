const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend developer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
          <box-icon name='badge-check'></box-icon>
            <div>
              <h3 className="skills-name">MongoDB</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
          <box-icon name='badge-check'></box-icon>
            <div>
              <h3 className="skills-name">Node Js</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          
        </div>
        <div className="skills-group">
        
          <div className="skills-data">
          <box-icon name='badge-check'></box-icon>
            <div>
              <h3 className="skills-name">Express Js</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
