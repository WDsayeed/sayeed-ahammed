import "./Home.css";
import Social from "./social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="section home" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social></Social>
          <div className="home-img"></div>
          <Data></Data>
        </div>
        <ScrollDown></ScrollDown>
      </div>
    </section>
  );
};

export default Home;
