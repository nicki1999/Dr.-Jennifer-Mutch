import KneeReplacementDefinition from "../../../images/Knee/KneeReplacementDefinition.jpg";
import HipOAPlanning from "../../../images/Hip/Hip-OA-Planning.png";

export default function HipReplacementContent() {
  return (
    <div className="row KneeReplacementContent  indigo lighten-5 shared-margin">
      <div className="col l10 offset-l1 Expertise-definition">
        <div className="col l6 right-side">
          <h6>
            <u>What is a hip replacement?</u>
          </h6>
          <p>
            A hip replacement is a surgical procedure where diseased bone and
            cartilage is removed and replaced with an implant, typically made of
            metal, ceramic and plastic. Both the top (pelvis) and the bottom
            (femur) of the hip are replaced. This is one of the most successful
            of surgical procedures in all of medicine a very successful surgery
            with satisfaction rates of 90% or more, allowing patients to live
            their lives with better mobility, function and quality of life.
          </p>
        </div>
        <div className="col l6 left-side ">
          <img
            className="z-depth-1 HipReplacementContentImage"
            src={HipOAPlanning}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
