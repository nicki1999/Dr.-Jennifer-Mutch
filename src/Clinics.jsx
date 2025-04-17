import React, { useEffect } from "react";
import M from "materialize-css";
export default function Clinics() {
  useEffect(() => {
    const westmountElem = document.getElementById("WestmountsquareCarousel");
    const stMaryElem = document.getElementById("stMaryCarousel");

    if (westmountElem) {
      M.Carousel.init(westmountElem, {
        fullWidth: true,
        indicators: true,
      });
    }

    if (stMaryElem) {
      M.Carousel.init(stMaryElem, {
        fullWidth: true,
        indicators: true,
      });
    }
  }, []);
  return (
    <div className="Clinics row container">
      <div className="westmountSquareClinic col s12 l6">
        <h5>
          <b>
            <u className="indigo-text">
              Westmount square surgery clinic (private){" "}
            </u>
          </b>
        </h5>
        <p>
          The Westmount Square Surgery Clinic is a state of the art facility
          located in Montreal, Quebec. It is a Canadian Accredited Facility with
          Exemplary Standing.
        </p>
        <div
          id="WestmountsquareCarousel"
          className="carousel carousel-slider center"
        >
          <div className="carousel-fixed-item center">
            <a
              href="https://wssurgical.com/"
              className="btn waves-effect white indigo-text"
            >
              Visit Website
            </a>
          </div>
          <div className="carousel-item red white-text" href="#one!">
            {/* <h2>First Panel</h2>
            <p className="white-text">This is your first panel</p> */}
          </div>
          <div className="carousel-item amber white-text" href="#two!">
            {/* <h2>Second Panel</h2>
            <p className="white-text">This is your second panel</p> */}
          </div>
          <div className="carousel-item green white-text" href="#three!">
            {/* <h2>Third Panel</h2>
            <p className="white-text">This is your third panel</p> */}
          </div>
          <div className="carousel-item blue white-text" href="#four!">
            {/* <h2>Fourth Panel</h2>
            <p className="white-text">This is your fourth panel</p> */}
          </div>
        </div>
      </div>
      <div className="stMaryHospital col s12 l6">
        <h5>
          <b>
            <u className="indigo-text">St-Mary's Hospital (public) </u>
          </b>
        </h5>
        <p>
          St-Mary’s Hospital is a 270 bed facility in Montreal, Quebec. It has
          been serving the community for 100 years and is the center that
          performs the most total hips and total knees in the province of
          Quebec, Canada. St-Mary’s is a University Center and is affiliated
          with McGill University, training the next generation of Orthopedic
          surgeons.
        </p>
        <div id="stMaryCarousel" className="carousel carousel-slider center">
          <div className="carousel-fixed-item center">
            <a
              href="https://www.smhc.qc.ca/en/about/executive-director-s-message"
              className="btn waves-effect white indigo-text"
            >
              Visit Website
            </a>
          </div>
          <div className="carousel-item red white-text" href="#five!">
            {/* <h2>First Panel</h2>
            <p className="white-text">This is your first panel</p> */}
          </div>
          {/* <div className="carousel-item amber white-text" href="#six!">
            <h2>Second Panel</h2>
            <p className="white-text">This is your second panel</p>
          </div> */}
          {/* <div className="carousel-item green white-text" href="#seven!">
            <h2>Third Panel</h2>
            <p className="white-text">This is your third panel</p>
          </div> */}
          {/* <div className="carousel-item blue white-text" href="#eight!">
            <h2>Fourth Panel</h2>
            <p className="white-text">This is your fourth panel</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
