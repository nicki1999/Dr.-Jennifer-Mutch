import BandagedPatientUsingWalker from "../../../images/Knee/BandagedPatientUsingWalker.jpg";
export default function KneeReplacementExpectation() {
  return (
    <div className="row KneeReplacementDifferentTypes shared-margin indigo lighten-5">
      <div className="col l10 offset-l1 KneeReplacementDifferentTypesMargin">
        <div className="col l6 s12 left-side">
          <img className="z-depth-1" src={BandagedPatientUsingWalker} alt="" />
        </div>
        <div className="col l6 right-side">
          <h6>
            <u>What can I expect during recovery? </u>
          </h6>
          <ul>
            <li>
              <b>Pain:</b> After your knee surgery you will have numbness on the
              front of your knee and down your leg. This is to help control your
              pain after surgery and can last up to 24 hours. Once the freezing
              starts to wear off you will be given Tylenol, anti-inflammatories
              and stronger medications (narcotics) if needed to control your
              pain. These same medications will be prescribed for you at home
              and you will be able to take them as needed for pain control.{" "}
            </li>
            <br />
            <li>
              <b>Motion:</b> Within a few hours of surgery you will be seen by a
              physiotherapist and you will get up to walk for the first time.
              You will use a walker in the beginning and gradually wean off as
              you become stronger and more confident. By 4 weeks most of Dr
              Mutch’s patients are either walking without any assistance or with
              a cane as needed. Low-impact exercises like stationary cycling are
              encouraged as early as 2 weeks after your surgery.
            </li>
            <br />
            <li>
              <b>Healing:</b> You will have a dressing on the front of your knee
              that will stay in place for 7-10 days. Once removed and the cut is
              seen by the nurse (or pictures sent to Dr Mutch by e-mail) and
              healed nicely, activities in water and the pool are permitted.
              Swelling and stiffness around the knee is normal and will improve
              with ice, time and exercises.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
