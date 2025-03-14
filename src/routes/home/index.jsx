import {Link} from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <img src="/orbital.png" className="orbital" />
      <div className="left-section">
        <h1>ConvoMate</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Experience smart, fast, and intuitive conversations anytime!</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right-section">
        <div className="image-container">
          <div className="bg-container">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
        </div>
      </div>
    </div>
  );
};

export default Home;
