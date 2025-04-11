import ShoulderReplacementDefinition from "../../../images/Shoulder/Shoulder Pre-op.png";

export default function ShoulderReplacementContent() {
  return (
    <div className="row KneeReplacementContent  indigo lighten-5 shared-margin">
      <div className="col l10 offset-l1 Expertise-definition">
        <div className="col l6 right-side">
          <h6>
            <u>What is a shoulder replacement?</u>
          </h6>
          <p>
            A shoulder replacement is a surgical procedure where diseased bone
            and cartilage is removed and replaced with an implant, typically
            made of metal and plastic. Both the socket (shoulder blade) and the
            ball (top of the arm bone) of the shoulder are replaced. This is a
            very successful surgery with satisfaction rates of around 90%
            allowing patients to live their lives with better mobility, function
            and quality of life.
          </p>
        </div>
        <div className="col l6 left-side">
          <img
            className="z-depth-1 ShoulderReplacementContentImage"
            src={ShoulderReplacementDefinition}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
