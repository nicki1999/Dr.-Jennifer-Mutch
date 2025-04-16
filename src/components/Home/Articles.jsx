import ArticlesCard from "./miniSections/ArticlesCard";
import rosa from "../../images/ROSA.png";
import surgicalTraining from "../../images/SurgicalTraining.jpg";
export default function Articles() {
  return (
    <div
      className="row articles indigo lighten-4"
      id="articles"
      style={{ marginBottom: 0 }}
    >
      <div className="col s10 offset-s1">
        <h2 className="center">
          <u>News Article</u>
        </h2>
        <br />
        <br />
        <div className="card-holders col s12">
          <div class="row">
            <div class="col s12">
              {/* <ArticlesCard
                image={rosa}
                title="ROSA® Knee System"
                description="The ROSA® Knee System is an advanced robotic technology developed by surgeons, aiming to enhance knee replacement surgery. It provides surgeons with objective feedback on soft tissue and precise bone cutting capabilities. By collecting real-time surgical metrics, ROSA Knee supports informed decision-making, enabling surgeons to focus on achieving optimal outcomes that restore natural knee function for patients."
                link="https://www.zimmerbiomet.com/en/products-and-solutions/specialties/knee/rosa--knee-system.html"
              ></ArticlesCard> */}
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
                    Dr. Jennifer Mutch plans to undergo additional training in
                    the Anterior approach for total hip replacements, scheduled
                    to take place in Belgium in 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
