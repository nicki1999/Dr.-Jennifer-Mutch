import KneeReplacementRisks from "../../images/KneeReplacementRisks.jpg";
export default function ExpertiseRisks() {
  return (
    <div className="row expertiseDifferentTypes expertisePreparation expertiseRisks">
      <div className="col l10 offset-l1">
        <div className="col l6 right-side">
          <h6>
            <u>What are the risks of knee replacement? </u>
          </h6>
          <p>
            Knee replacements are the most common joint replacement performed in
            Canada and around the world. Results are typically excellent in 85%
            of cases or more. However, there are risks of some complications and
            these include: infection, stiffness, loosening, blood clots,
            fracture, injury to an artery or nerve and medical complications.
            These are rare and the risks can change depending on your health.
            These will be discussed in detail during your appointment with Dr
            Mutch.
          </p>
        </div>
        <div className="col l6 s12 left-side">
          <img
            className="z-depth-1 expertiseDifferentTypesImage"
            src={KneeReplacementRisks}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
