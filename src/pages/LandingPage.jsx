import React from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import "../styles/LandingPage.css";
import detectiveImage from "../assets/detective.png";
import Footer from "../pages/Footer";
import TextGenerateEffect from "../components/TextGenerateEffect"; // Import the effect component

const words = `Our innovative system provides rapid, accurate identification of unclaimed bodies, ensuring respect and closure for families. Access this breakthrough technology easily through our user-friendly web app.`;

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main className="landing-main">
        <div className="text-container text-center">
          <h1 className="text-4xl font-bold text-[#575454]">COLD RECOG</h1>
          <TextGenerateEffect words={words} className="mt-10" />
          <Link to="/search">
            <button className="mt-16 px-6 py-2 bg-[#575454] text-white rounded-lg hover:bg-gray-700 transition-all">
              SEARCH
            </button>
          </Link>
        </div>
        <div className="image-container">
          <img
            src={detectiveImage}
            alt="Detective"
            className="detective-image"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
