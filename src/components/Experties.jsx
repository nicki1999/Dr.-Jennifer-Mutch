import KneeReplacement from "../images/KneeReplacement.png";
import HipReplacement from "../images/HipReplacement.png";
import ShoulderReplacement from "../images/ShoulderReplacement.png";

import ExpertiesCard from "./miniSections/ExpertiesCard";
export default function Experties() {
  return (
    <div className="row experties indigo lighten-4" id="expertise">
      <div className="col s10 offset-s1">
        <h2 className="center">
          <u>Expertise</u>
        </h2>
        <br />
        <br />
        <div className="card-holders col s12">
          <ExpertiesCard
            image={KneeReplacement}
            title="Knee replacement"
            description="Knee replacement surgery involves removing a damaged or worn-out knee joint and replacing it with an artificial joint, commonly made of metal and plastic. This procedure is often recommended for individuals suffering from severe arthritis, knee pain, or joint degeneration to restore mobility and reduce pain."
          ></ExpertiesCard>
          <ExpertiesCard
            image={ShoulderReplacement}
            title="Shoulder replacement"
            description="Shoulder replacement surgery involves removing a damaged or worn-out shoulder joint and replacing it with an artificial joint, typically made of metal and plastic. This procedure is commonly recommended for individuals with severe arthritis, joint degeneration, or shoulder fractures to relieve pain and improve mobility."
          ></ExpertiesCard>
          <ExpertiesCard
            image={HipReplacement}
            title="Hip replacement"
            description="Hip replacement surgery involves removing a damaged or worn-out hip joint and replacing it with an artificial joint, usually made of metal, ceramic, or plastic. This procedure is often recommended for individuals with severe arthritis, hip fractures, or joint degeneration to reduce pain and improve mobility."
          ></ExpertiesCard>
        </div>
      </div>
    </div>
  );
}
