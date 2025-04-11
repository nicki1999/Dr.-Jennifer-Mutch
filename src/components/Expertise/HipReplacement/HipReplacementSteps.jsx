import THAPreOp from "../../../images/Hip/Right-THA-Pre-op.png";
import THAPlanning from "../../../images/Hip/Right-THA-Planning.png";
import THAPostOp from "../../../images/Hip/Right-THA-Post-op.png";

export default function HipReplacementSteps() {
  return (
    <div className="row KneeReplacementDifferentTypes expertiseSteps  indigo lighten-5 shared-margin">
      <div className="col l10 offset-l1 KneeReplacementDifferentTypesMargin">
        <div className="col s12 right-side">
          <h6>
            <u>What are the steps to your hip replacement?</u>
          </h6>
          <ul>
            <li>1. Assessment of Optimal Treatment/Surgery </li>
            <p>
              Once it has been determined that surgery is needed for your
              painful hip you will undergo an evaluation and discussion with Dr
              Mutch regarding the best surgery for your needs. Things that will
              be considered are your health, activity level, location of pain
              and pattern of arthritis on XR.{" "}
            </p>
            <li>2. Special XR and Surgical Planning </li>
            <p>
              Special calibrated XRs will be taken of your entire hip and will
              be used to precisely plan your surgery. Proper planning allows for
              appropriate implant selection, position and sizing and helps
              ensure a smooth operation on the day of your surgery.
            </p>
            {/* <li>A – Pre-operative XR (Pic here) </li> */}
            <div class="row">
              <div className="KneeReplacementDifferentTypesImageContainer">
                <div class="col l4 m5 s12">
                  <div class="card">
                    <div class="card-image">
                      <img src={THAPreOp} />
                      <span class="card-title">A – Pre-operative XR</span>
                    </div>
                    <div class="card-content">
                      <p>Imaging showing severe arthritis </p>
                    </div>
                    {/* <div class="card-action">
                      <a href="#">This is a link</a>
                    </div> */}
                  </div>
                </div>
                <div class="col l4 m5 s12">
                  <div class="card">
                    <div class="card-image">
                      <img src={THAPlanning} />
                      <span class="card-title">B – Operative Planning</span>
                    </div>
                    <div class="card-content">
                      <p>
                        Templating using specialized computer software to plan
                        the proper implant type, size and position
                      </p>
                    </div>
                    {/* <div class="card-action">
                      <a href="#">This is a link</a>
                    </div> */}
                  </div>
                </div>
                <div class="col l4 m5 s12">
                  <div class="card">
                    <div class="card-image">
                      <img src={THAPostOp} />
                      <span class="card-title">C – Post-operative XR</span>
                    </div>
                    <div class="card-content">
                      <p>Imaging showing new implant position</p>
                    </div>
                    {/* <div class="card-action">
                      <a href="#">This is a link</a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <li>B – Operative Planning (Pic here) </li>
            <li>C – Post-operative XR (Pic here) </li> */}
            <br />
            <li>3. Rapid Mobilization to Optimize Recovery </li>
            <p>
              Once your surgery is complete and the anesthesia has worn off, you
              will be mobilized out of bed to walk as quickly as possible,
              usually within the first 2-4 hours. This helps your hip recover as
              quickly as possible and many patients are able to return home the
              same day as their surgery. Low-impact activities such as walking,
              cycling and aquafitness are encouraged as early as 2 weeks after
              your surgery (once the cut on your hip has healed).
            </p>
          </ul>
        </div>
        {/* <div className="col l6 s12 left-side">
          <img
            className="z-depth-1 expertiseStepsImage"
            src={KneeReplacementSteps}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
