import ShoulderReplacementIntroduction from "./components/Expertise/ShoulderReplacement/ShoulderReplacementIntroduction";
import ShoulderReplacementTargetAudience from "./components/Expertise/ShoulderReplacement/ShoulderReplacementTargetAudience";
import ShoulderReplacementContent from "./components/Expertise/ShoulderReplacement/ShoulderReplacementContent";
import ShoulderReplacementPreparation from "./components/Expertise/ShoulderReplacement/ShoulderReplacementPreparation";
import ShoulderReplacementExpectation from "./components/Expertise/ShoulderReplacement/ShoulderReplacementExpectation";
import ShoulderReplacementRisks from "./components/Expertise/ShoulderReplacement/ShoulderReplacementRisks";
import ShoulderReplacementDifferentTypes from "./components/Expertise/ShoulderReplacement/ShoulderReplacementDifferentTypes";
export default function ShoulderReplacement() {
  return (
    <div>
      <ShoulderReplacementIntroduction></ShoulderReplacementIntroduction>
      <ShoulderReplacementTargetAudience></ShoulderReplacementTargetAudience>
      <ShoulderReplacementContent></ShoulderReplacementContent>
      <ShoulderReplacementDifferentTypes></ShoulderReplacementDifferentTypes>
      <ShoulderReplacementPreparation></ShoulderReplacementPreparation>
      <ShoulderReplacementExpectation></ShoulderReplacementExpectation>
      <ShoulderReplacementRisks></ShoulderReplacementRisks>
    </div>
  );
}
