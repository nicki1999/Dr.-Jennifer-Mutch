import JKPlanningCoronal from "../../../images/Shoulder/JK-Planning-Coronal.png";
import JkPlanningAxial from "../../../images/Shoulder/JK - Planning Axial.png";
export default function ShoulderReplacementDifferentTypes() {
  return (
    <div className="row KneeReplacementDifferentTypes shared-margin">
      <div className="col l10 offset-l1">
        <div className="col l6 left-side">
          <img className="z-depth-1" src={JKPlanningCoronal} alt="" />
          <img className="z-depth-1" src={JkPlanningAxial} alt="" />
        </div>
        <div className="col l6 right-side">
          <h6>
            <u>Are there different types of shoulder replacements?</u>
          </h6>
          <p>
            There are 2 main types of shoulder replacements. An anatomic
            shoulder replacement and a reverse shoulder replacement. An anatomic
            shoulder replacement replaces the worn cartilage and bone of your
            shoulder with an implant made of metal and plastic. For this type of
            implant to have the best possible function, the tendons around your
            shoulder need to be intact or have a tear that is small enough to
            repair and heal. A reverse shoulder replacement is typically done in
            cases where either the tendons of the shoulder are torn, or the bone
            in the shoulder is too worn out to be able to put in an anatomic
            replacement. In the past, reverse shoulder replacements have been
            done in individuals who are older because the muscles around the
            shoulder can get tired after about 10 years with a reverse shoulder
            replacement. The best type of shoulder replacement for you depends
            on a variety of factors and will be discussed in detail during your
            appointment with Dr Mutch.
          </p>
        </div>
      </div>
    </div>
  );
}
