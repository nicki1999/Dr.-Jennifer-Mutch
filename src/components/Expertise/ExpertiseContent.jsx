import KneeReplacementDefinition from "../../images/KneeReplacementDefinition.jpg";

export default function ExpertiseContent() {
  return (
    <div className="row ExpertiseContent">
      <div className="col l10 offset-l1 Expertise-definition">
        <div className="col l6 left-side">
          <img className="z-depth-1" src={KneeReplacementDefinition} alt="" />
        </div>
        <div className="col l6 right-side">
          <h6>
            <u>What is a "knee" replacement?</u>
          </h6>
          <p>
            Knee replacement surgery involves removing a damaged or worn-out
            knee joint and replacing it with an artificial joint, commonly made
            of metal and plastic. This procedure is often recommended for
            individuals suffering from severe arthritis, knee pain, or joint
            degeneration to restore mobility and reduce pain.
          </p>
        </div>
      </div>
    </div>
  );
}
