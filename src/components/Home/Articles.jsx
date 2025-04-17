import ArticlesCard from "./miniSections/ArticlesCard";
import CommunityConference from "../../images/Articles/CommunityConference.png";
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
              <ArticlesCard
                image={CommunityConference}
                title="St. Mary's Ortho: Osteoporosis & Osteoarthritis"
                description="The event encourages dialogue and connection between researchers and the community, with the SMRC Orthopaedics team helping bridge local knowledge and medical research."
                link="https://www.ciusss-ouestmtl.gouv.qc.ca/en/news-and-events/single/conference-communautaire-du-crsm-orthopedie-a-st-mary-1"
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
