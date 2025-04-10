import KneeReplacementDefinition from "../../../images/Knee/KneeReplacementDefinition.jpg";

export default function KneeReplacementContent() {
  return (
    <div className="row KneeReplacementContent  indigo lighten-5 shared-margin">
      <div className="col l10 offset-l1 Expertise-definition">
        <div className="col l6 right-side">
          <h6>
            <u>What is a "knee" replacement?</u>
          </h6>
          <p>
            A knee replacement is a surgical procedure where diseased bone and
            cartilage is removed and replaced with an implant, typically made of
            metal and plastic. Both the top (femur) and the bottom (tibia) of
            the knee are replaced and sometimes the kneecap as well. This is a
            very successful surgery with satisfaction rates from 85-95% allowing
            patients to live their lives with better mobility, function and
            quality of life.
          </p>
        </div>
        <div className="col l6 left-side">
          <img className="z-depth-1" src={KneeReplacementDefinition} alt="" />
        </div>
      </div>
    </div>
  );
}
