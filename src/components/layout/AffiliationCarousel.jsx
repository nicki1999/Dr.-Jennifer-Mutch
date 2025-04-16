import React from "react";
import { useEffect } from "react";
import McgillUniversityLogo from "../../images/Affiliations/McgillUniversity.png";
import SunnyBrookLogo from "../../images/Affiliations/Sunnybrook.png";
import DetroitMedicalCenterLogo from "../../images/Affiliations/DetroitMedicalCenter.png";
import QuebecOrthopedicAssociation from "../../images/Affiliations/QuebecOrthopedicAssociation.png";
import CanadianOrthopedicAssociation from "../../images/Affiliations/CanadianOrthopedicAssociation.png";
import RoyalCollegeOfPhysiciansAndSurgeonsofCanada from "../../images/Affiliations/RoyalCollegeOfPhysiciansAndSurgeonsofCanada.png";
import StMarysHospitalCenter from "../../images/Affiliations/St-Mary’sHospitalCenter.png";
import UniversityofMontrealLogo from "../../images/Affiliations/UniversityofMontreal.png";
import RateMD from "../../images/Affiliations/RateMD.png";
import { Link } from "react-router-dom";

export default function AffiliationCarousel() {
  useEffect(() => {
    const elems = document.querySelectorAll(".carousel");

    if (window.M) {
      window.M.Carousel.init(elems, {
        duration: 200,
        indicators: true,
      });
    } else {
      console.error("Materialize (M) is not loaded");
    }
  }, []);
  return (
    <div className="AffiliationCarousel indigo lighten-4">
      <h5 className="center">
        <b>
          <u>Affiliations</u>
        </b>
      </h5>
      <div class="carousel">
        <a class="carousel-item" href="#one!">
          <img src={McgillUniversityLogo} />
        </a>
        <a class="carousel-item" href="#two!">
          <img src={SunnyBrookLogo} />
        </a>
        <a class="carousel-item" href="#three!">
          <img src={DetroitMedicalCenterLogo} />
        </a>
        <a class="carousel-item" href="#four!">
          <img src={QuebecOrthopedicAssociation} />
        </a>
        <a class="carousel-item" href="#five!">
          <img src={CanadianOrthopedicAssociation} />
        </a>
        <a class="carousel-item" href="#six!">
          <img src={RoyalCollegeOfPhysiciansAndSurgeonsofCanada} />
        </a>
        <a class="carousel-item" href="#seven!">
          <img src={StMarysHospitalCenter} />
        </a>
        <a class="carousel-item" href="#eight!">
          <img src={UniversityofMontrealLogo} />
        </a>
      </div>

      <div className="rateMDImageContainer">
        <h6>Top rated Surgeon on... </h6>

        <a
          href="https://www.ratemds.com/doctor-ratings/3476637/Dr-J-Mutch-Montreal-QC.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={RateMD} alt="RateMD logo" className="rateMD" />
        </a>
      </div>
    </div>
  );
}
