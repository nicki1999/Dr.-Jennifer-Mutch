import BilateralTotalKneePlanning from "../../images/Knee/Bilateral Total Knee Planning.png";
import RidingBike from "../../images/Riding Bike.jpg";
export default function ExpertiseTargetAudience() {
  return (
    <div className="row ExpertiseTargetAudience shared-margin">
      <div className="col l10 offset-l1 Expertise-definition">
        {/* <div className="col l12 left-side">
          <img className="z-depth-1" src={KneeReplacementTargetAudience} alt="" />
        </div> */}
        <div className="col l6 s12 right-side ">
          <h6 className="center">
            <u>Who should get a knee replacement?</u>
          </h6>
          <p>
            A knee replacement is an appropriate option when you suffer from
            end-stage (bone on bone) cartilage injury in your knee. This usually
            causes daily pain, stiffness, and limitations in your activities as
            mentioned below: <br />
            <ul>
              <li>- Walking</li>
              <li>- Stairs</li>
              <li>- Sports</li>
              <li>- Work</li>
            </ul>
            Many conditions can lead to cartilage injury in your knee and these
            including the following: <br />
            <ul>
              <li>- Osteoarthritis</li>
              <li>- Inflammatory arthritis</li>
              <li>- Avascular necrosis (dead bone)</li>
              <li>- Injury (old or new)</li>
              <li>- Prior surgery</li>
            </ul>
            Before considering surgery it is important to exhaust non-surgical
            options as these are often very effective in reducing your pain and
            improving your function without surgery. These include: <br />
            <ul>
              <li>- Physical therapy</li>
              <li>- Weight loss</li>
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
            see if a knee replacement is right for you.
          </p>
        </div>
        <div className="col l6 s12 left-side">
          <div className="image-wrapper">
            <img
              className="z-depth-1 expertiseTargetAudienceImage"
              src={BilateralTotalKneePlanning}
              alt="Bilateral Total Knee Planning"
            />
          </div>
          <div className="image-wrapper" style={{ marginTop: "20px" }}>
            <img
              className="z-depth-1 expertiseTargetAudienceImage"
              src={RidingBike}
              alt="Riding Bike"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
