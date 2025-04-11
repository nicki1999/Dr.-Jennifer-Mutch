import BandagedShoulder from "../../../images/Shoulder/BandagedShoulder.jpg";
export default function KneeReplacementExpectation() {
  return (
    <div className="row KneeReplacementDifferentTypes shared-margin indigo lighten-5">
      <div className="col l10 offset-l1 KneeReplacementDifferentTypesMargin">
        <div className="col l6 s12 left-side">
          <img className="z-depth-1" src={BandagedShoulder} alt="" />
        </div>
        <div className="col l6 right-side">
          <h6>
            <u>What can I expect during recovery? </u>
          </h6>
          <ul>
            <li>
              <b>Pain:</b> After your shoulder surgery you will have numbness
              and weakness in your arm. This is to help control your pain after
              surgery and can last up to 24 hours. Once the freezing starts to
              wear off you will be given Tylenol, anti-inflammatories and
              stronger medications (narcotics) if needed to control your pain.
              These same medications will be prescribed for you at home and you
              will be able to take them as needed for pain control.{" "}
            </li>
            <br />
            <li>
              <b>Motion:</b> Within a few hours of surgery you will be seen by a
              physiotherapist and you will get up to walk for the first time and
              will be shown the exercises to do at home. Your arm will be kept
              in a sling until the freezing wears off. Once the freezing has
              worn off you will start exercises for your hand, wrist and elbow
              as well as pendular exercises (leaning forwards and moving your
              shoulder in circular motions). You are encouraged to use your hand
              immediately for light activities between and below the shoulder
              (use your hand to do activities in front of you such as eating,
              washing your face, brushing your teeth, typing on a computer,
              etc). Your exercises and activities will increase as you heal and
              recover from surgery.
            </li>
            <br />
            <li>
              <b>Healing:</b> You will have a dressing on the front of your
              shoulder that will stay in place for about 10 days. Once removed
              and the cut is seen by Dr Mutch in the office (or pictures sent by
              e-mail) and healed nicely, activities in water and the pool are
              permitted. Swelling in the arm is normal and can be improved by
              exercising the hand and elbow and using ice.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
