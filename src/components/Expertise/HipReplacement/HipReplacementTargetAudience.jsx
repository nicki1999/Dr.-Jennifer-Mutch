import HipOA from "../../../images/Hip/Hip-OA.png";

export default function HipReplacementTargetAudience() {
  return (
    <div className="row KneeReplacementTargetAudience shared-margin">
      <div className="col l10 offset-l1 Expertise-definition">
        {/* <div className="col l12 left-side">
          <img className="z-depth-1" src={KneeReplacementTargetAudience} alt="" />
        </div> */}
        <div className="col l6 s12 right-side ">
          <h6>
            <u>Who should get a hip replacement?</u>
          </h6>
          <p>
            A hip replacement is an appropriate option when you suffer from
            end-stage (bone on bone) cartilage injury in your hip. This usually
            causes daily pain, stiffness, and limitations in your activities –
            such as walking, stairs, putting on your socks and shoes, sports and
            even work. Many conditions can lead to cartilage injury in your hip
            and these include:
            <br />
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
              <li>- Exercise</li>
              <li>- Physical therapy</li>
              <li>- Weight loss</li>
              <li>- Dietary changes</li>
              <li>- Oral medication (Tylenol, anti-inflammatories)</li>
              <li>- Bracing</li>
              <li>
                - Injections (cortisone, hyaluronic acid, PRP - platelet-rich
                plasma)
              </li>
            </ul>
            If you continue to have significant pain and poor function despite
            these treatments then it is time to see your orthopedic surgeon to
            see if a hip replacement is right for you. <br />
          </p>
        </div>
        <div className="col l6 s12 left-side">
          <div className="image-wrapper">
            <img
              className="z-depth-1 KneeReplacementTargetAudienceImage"
              src={HipOA}
              alt="HipOAPlanning"
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
