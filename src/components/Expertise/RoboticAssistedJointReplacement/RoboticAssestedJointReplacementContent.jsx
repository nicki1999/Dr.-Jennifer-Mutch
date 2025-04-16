import ArticlesCard from "../../Home/miniSections/ArticlesCard";
import rosa from "../../../images/ROSA.png";
import surgicalTraining from "../../../images/SurgicalTraining.jpg";
import RoboticAssistedSurgery from "../../../images/RoboticAssistedSurgery/RoboticAssistedSurgery.jpg";

export default function RoboticAssestedJointReplacementContent() {
  return (
    <div className="row KneeReplacementContent  indigo lighten-5 shared-margin">
      <div className="col l10 offset-l1 Expertise-definition">
        <div className="col l6 right-side">
          <h6>
            <u>Robotic-assisted joint replacement</u>
          </h6>
          <p>
            Robotic-assisted joint replacements have clearly been shown to
            increase the accuracy of bone cuts and implant positioning to within
            1mm or 1 degree of error. This is an incredibly precise tool that
            can be used by surgeons to assist them in replacing a patient’s full
            knee, partial knee or hip. However, despite this accuracy,
            robotically assisted total joint replacements have not yet been
            shown to make a difference in clinical outcomes (how you experience
            your new knee).
          </p>
          <p>
            Dr Mutch is certified on ROSA (Zimmer Biomet) and has been using and
            teaching ROSA for knee replacements since 2021.
          </p>
        </div>
        <div className="col l6 left-side">
          <img
            className="z-depth-1 RoboticAssistedSurgeryImage"
            src={RoboticAssistedSurgery}
            alt=""
          />
        </div>
      </div>
      <div className="card-holders col s12 ">
        <div class="row">
          <div class="col s12 RoboticAssistedJointReplacementContentCardHolders">
            <ArticlesCard
              image={rosa}
              title="ROSA® Knee System"
              description="The ROSA® Knee System is an advanced robotic technology developed by surgeons, aiming to enhance knee replacement surgery. It provides surgeons with objective feedback on soft tissue and precise bone cutting capabilities. By collecting real-time surgical metrics, ROSA Knee supports informed decision-making, enabling surgeons to focus on achieving optimal outcomes that restore natural knee function for patients."
              link="https://www.zimmerbiomet.com/en/products-and-solutions/specialties/knee/rosa--knee-system.html"
            ></ArticlesCard>
            {/* <ArticlesCard
                        image={surgicalTraining}
                        title="Anterior Approach Training"
                        description="Dr. Jennifer Mutch plans to undergo additional training in the Anterior approach for total hip replacements, scheduled to take place in Belgium in 2026."
                      ></ArticlesCard> */}
            <div class="col s12 l3 card offset-l1">
              <div class="card-image">
                <img src={surgicalTraining} />
                <div className="indigo title-container">
                  <span class="card-title">
                    <b>Anterior Approach Training</b>
                  </span>
                </div>
              </div>
              <div class="card-content">
                <p>
                  Dr. Jennifer Mutch plans to undergo additional training in the
                  Anterior approach for total hip replacements, scheduled to
                  take place in Belgium in 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
