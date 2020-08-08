import React from 'react';
import nasa from '../images/nasa-img.png';
import weather from '../images/WeatherDashboard.png';
import gradebook from '../images/titlepage.jpg';
import codequiz from '../images/code-quiz.png';

function Portfolio() {
    return (
      <section>
        <h2>Portfolio</h2><br/>
        <img
          src={nasa}
          alt="NASA Application"
          className="nasa-img mx-1"
        />
        <img
          src={weather}
          alt="Weather Dashboard"
          className="WeatherDashboard mx-1"
        />
        <img
          src={gradebook}
          alt="Teacher Gradebook"
          className="titlepage mx-1"
        />
        <img
          src={codequiz}
          alt="Code Quiz"
          className="titlepage mx-1"
        />
      </section>
    );
  }
  
  export default Portfolio;