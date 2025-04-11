import KneeReplacementRisks from "../../../images/Knee/KneeReplacementRisks.jpg";
export default function HipReplacementRisks() {
  return (
    <div
      style={{ marginBottom: 0 }}
      className="row KneeReplacementDifferentTypes KneeReplacementPreparation expertiseRisks shared-margin"
    >
      <div className="col l10 offset-l1">
        <div className="col s12 right-side">
          <h6>
            <u>What are the risks of hip replacement? </u>
          </h6>
          <p>
            Hip replacements are the second most common joint replacement
            performed in Canada and around the world. Results are typically
            excellent in 90% of cases or more. However, there are risks of some
            complications and these include: infection, stiffness, dislocation,
            blood clots, fracture, injury to an artery or nerve and medical
            complications. These are rare and the risks can change depending on
            your health. These will be discussed in detail during your
            appointment with Dr Mutch.
          </p>
          <br />
          <br />
        </div>
        {/* <div className="col l6 s12 left-side">
          <img
            className="z-depth-1 KneeReplacementDifferentTypesImage"
            src={KneeReplacementRisks}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
