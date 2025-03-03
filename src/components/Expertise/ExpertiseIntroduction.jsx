import KneeReplacementRealLife from "../../images/KneeReplacementRealLife.png";
export default function ExpertiseIntroduction() {
  return (
    <div className="row ExpertiseIntroduction">
      <div className="">
        <img
          src={KneeReplacementRealLife}
          className="KneeReplacementRealLife"
          alt=""
        />
        <div className="col s4 offset-s6 description">
          <span>this is description</span>
        </div>
      </div>
    </div>
  );
}
