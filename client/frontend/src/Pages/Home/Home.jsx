import React from "react";
import homeImage from "../../Images/home.png"; 
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="">
    <body>
      <main class="Home_main">
        <div class="Home_container">
          <img src={homeImage} alt=""/>
          <div class="Home_hero-text">
            <h1>Pahasara Higher Education Center</h1>
            <p>Explore our amazing content and features! <br/>Your Path to Educational Excellence Begins Here
            </p><br/><br/>
            <Link className="Home_button" to="/login">Login</Link>
          </div>
        </div>
      </main>
    </body>
    
    </div>
  );
}

export default Home;