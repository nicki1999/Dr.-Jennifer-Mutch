import KneePhysiotherapy from "../../../images/Knee/KneePhysiotherapy.jpg";
import PersonWalkingInPool from "../../../images/Shoulder/PersonWalkingInPool.jpg";

export default function ShoulderReplacementPreparation() {
  return (
    <div className="row KneeReplacementDifferentTypes KneeReplacementPreparation shared-margin">
      <div className="col l10 offset-l1">
        <div className="col l6 right-side">
          <br />
          <br />
          <h6>
            <u>How can I prepare for surgery?</u>
          </h6>
          <p>
            The healthier and more active you are going into surgery, the easier
            it will be to recover and get moving and living your life.
          </p>
          <ul>
            <li>
              {" "}
              <i class="material-icons">done</i> &nbsp; Stop smoking or reduce
              smoking as much as possible.
            </li>
            <li>
              {" "}
              <i class="material-icons">done</i> &nbsp; Maintain a healthy
              weight and eat a balanced diet.
            </li>
            <li>
              {" "}
              <i class="material-icons">done</i> &nbsp; Prepare healthy meals
              for the few weeks after surgery in advance. These can be reheated
              to fuel your healing and allow you to concentrate on your recovery
              and exercises.
            </li>
            <li>
              {" "}
              <i class="material-icons">done</i> &nbsp; Keep active and improve
              your muscle strength. A home physiotherapy program or moving water
              in a pool can help you improve your muscle strength while
              minimizing your pain.
            </li>
          </ul>
          <p>
            Optimize any chronic health conditions such as diabetes, heart
            disease, sleep apnea, obesity or chronic narcotic use prior to
            surgery. Ideally this should be done with your family doctor, but
            you will also meet a medical health professional (the
            anesthesiologist) some time prior to your surgery and they will be
            better able to determine when is the optimal time for you to undergo
            surgery.{" "}
          </p>
          <br />
          <br />
        </div>
        <div className="col l6 s12 left-side">
          <img
            className="z-depth-1 KneeReplacementPreparationImage"
            src={PersonWalkingInPool}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
