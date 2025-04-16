import JkPlanningAxial from "../../../images/Shoulder/JK - Planning Axial.png";
import JKPreop from "../../../images/Shoulder/JK-Preop.png";
export default function ShoulderReplacementTargetAudience() {
  return (
    <div className="row KneeReplacementTargetAudience shared-margin">
      <div className="col l10 offset-l1 Expertise-definition">
        {/* <div className="col l12 left-side">
          <img className="z-depth-1" src={KneeReplacementTargetAudience} alt="" />
        </div> */}
        <div className="col l6 s12 right-side ">
          <h6>
            <u>Who should get a shoulder replacement?</u>
          </h6>
          <p>
            A shoulder replacement is an appropriate option when you suffer from
            end-stage (bone on bone) cartilage injury in your shoulder. It may
            also be appropriate if you have torn tendons in your shoulder that
            cannot be repaired. These conditions usually cause daily pain,
            stiffness, and limitations in your activities – such as reaching
            overhead, putting on a seatbelt, cooking, sports (swimming, golf,
            raquet sports, etc.) and even work. Many conditions can lead to
            cartilage injury in your shoulder and these include:
            <br />
            <ul>
              <li>- Osteoarthritis</li>
              <li>- Inflammatory arthritis</li>
              <li>- Avascular necrosis (dead bone)</li>
              <li>- Injury (old or new) </li>
              <li>- Prior surgery </li>
            </ul>
            Common conditions leading to tendon tears include: <br />
            <ul>
              <li>- Repetitive or physical work</li>
              <li>- Shoulder dislocation</li>
              <li>- Injury/fall (old or new)</li>
              <li>- Prior surgery</li>
            </ul>
            Before considering surgery it is important to exhaust non-surgical
            options as these are often very effective in reducing your pain and
            improving your function without surgery. These include:
            <ul>
              <li>- Exercise</li>
              <li>- Physical therapy</li>
              <li>- Dietary changes</li>
              <li>- Oral medication (Tylenol, anti-inflammatories)</li>
              <li>- Bracing</li>
              <li>
                - Injections (cortisone, hyaluronic acid, PRP (protein-rich
                plasma))
              </li>
            </ul>
            If you continue to have significant pain and poor function despite
            these treatments then it is time to see your orthopedic surgeon to
            see if a shoulder replacement is right for you.
          </p>
        </div>
        <div className="col l6 s12 left-side">
          <div className="image-wrapper">
            <img
              className="z-depth-1 KneeReplacementTargetAudienceImage"
              src={JKPreop}
              alt="Bilateral Total Knee Planning"
            />
          </div>
          {/* <div className="image-wrapper" style={{ marginTop: "20px" }}>
            <img
              className="z-depth-1 KneeReplacementTargetAudienceImage"
              src={RidingBike}
              alt="Riding Bike"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
