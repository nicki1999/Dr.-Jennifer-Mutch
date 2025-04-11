import RightTHAPlanning from "../../../images/Hip/Right-THA-Planning.png";
import HipOAPlanning1 from "../../../images/Hip/Hip-OA-Planning_1.png";
export default function HipReplacementDifferentTypes() {
  return (
    <div className="row KneeReplacementDifferentTypes shared-margin">
      <div className="col l10 offset-l1">
        <div className="col l6 left-side">
          <img className="z-depth-1" src={RightTHAPlanning} alt="" />
          <img className="z-depth-1" src={HipOAPlanning1} alt="" />
        </div>
        <div className="col l6 right-side">
          <h6>
            <u>Are there different types of hip replacements?</u>
          </h6>
          <p>
            There has been a lot of talk in the news about different bearing
            types (the area of the hip that moves when you do) in hip
            replacement. These fall into 3 main types: Metal on metal: this type
            of surface was developed to try to get hip replacements to last
            longer. It ran into problems with some particular implants leading
            to increased metal debris in the hip area and in your bloodstream.
            These types of hip replacements are not as common today and are not
            recommended by Dr Mutch. Metal or Ceramic on Polyethylene: this is
            the most common type of bearing surface and with modern plastics
            (polyethylene) can be expected to last over 20 years in 90-95% of
            cases. The ceramic on polyethylene has better wear properties and
            would be chosen in cases where the joint would be needed for more
            than 20 years or by personal choice. Ceramic on Ceramic: this is the
            bearing surface that has the longest expected durability and would
            be chosen in cases where the patient in very young (30s or less). It
            works very well overall but can have some unique problems like
            squeaking in some cases.
          </p>
        </div>
      </div>
    </div>
  );
}
