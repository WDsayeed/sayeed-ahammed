// import chef from '../../assets/chef.jpeg'
import "./Portfolio.css";
const Portfolio = () => {
  return (
    //        <section className="portfolio" id="portfolio">
    //         <h3 className="section-title">Latest projects</h3>
    //         <div className="portfolio-container container">
    //                 <div className="portfolio-box">
    //                         <img src={chef} alt="" />
    //                         <div className="portfolio-layer">
    //                                 <h4>Web design</h4>
    //                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias iste veritatis repudiandae, ?</p>
    //                                 <a href=""><i className="uil uil-external-link-alt"></i></a>
    //                         </div>
    //                 </div>
    //                 <div className="portfolio-box">
    //                         <img src={chef} alt="" />
    //                         <div className="portfolio-layer">
    //                                 <h4>Web design</h4>
    //                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias iste veritatis repudiandae, ?</p>
    //                                 <a href=""><i className="uil uil-external-link-alt"></i></a>
    //                         </div>
    //                 </div>
    //                 <div className="portfolio-box">
    //                         <img src={chef} alt="" />
    //                         <div className="portfolio-layer">
    //                                 <h4>Web design</h4>
    //                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias iste veritatis repudiandae, ?</p>
    //                                 <a href=""><i className="uil uil-external-link-alt"></i></a>
    //                         </div>
    //                 </div>
    //         </div>
    //        </section>
    <section>
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">What i offer</span>
      <div className="portfolio-container container">
        <div className="box box-1">
          <a href="https://cooking-master-2f326.web.app/" className="">
            <div className="overlay"></div>
          </a>
          <div className="description">
            <p>
              Everyone here will able to know about some chefs.Here, there is
              detailed information about many good chefs and their
              specialties.Anyone who has access to the details of the chef's
              recipe can learn to cook using the appropriate cooking method.
            </p>
            <div className="flex">
                <button>client code</button>
                <button>server code</button>
            </div>
          </div>
        </div>

        <div className="box box-2">
          <a href="https://toy-car-143d1.web.app/" target="blank">
            <div className="overlay"></div>
          </a>
          <div className="description">
            <p>
              Everyone here will able to know about some chefs.Here, there is
              detailed information about many good chefs and their
              specialties.Anyone who has access to the details of the chef's
              recipe can learn to cook using the appropriate cooking method.
            </p>
            <div className="flex">
                <button>client code</button>
                <button>server code</button>
            </div>
          </div>
        </div>
        <div className="box box-3">
          <a href="https://foreign-language-dc0b8.web.app/" target="blank">
            <div className="overlay"></div>
          </a>
          <div className="description">
            <p>
            This is Language learning web application.Everybody can learn any language by logging into this application.Admin can make any user an instructor if he wants.Instructors can add their classes and take classes.
            </p>
            <div className="flex">
                <button>client code</button>
                <button>server code</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
