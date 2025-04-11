import HipReplacementIntroduction from "./components/Expertise/HipReplacement/HipReplacementIntroduction";
import HipReplacementTargetAudience from "./components/Expertise/HipReplacement/HipReplacementTargetAudience";
import HipReplacementContent from "./components/Expertise/HipReplacement/HipReplacementContent";
import HipReplacementDifferentTypes from "./components/Expertise/HipReplacement/HipReplacementDifferentTypes";
import HipReplacementPreparation from "./components/Expertise/HipReplacement/HipReplacementPreparation";
import HipReplacementExpectation from "./components/Expertise/HipReplacement/HipReplacementExpectation";
import HipReplacementRisks from "./components/Expertise/HipReplacement/HipReplacementRisks";
import HipReplacementSteps from "./components/Expertise/HipReplacement/HipReplacementSteps";
export default function HipReplacement() {
  return (
    <div>
      <HipReplacementIntroduction></HipReplacementIntroduction>
      <HipReplacementTargetAudience></HipReplacementTargetAudience>
      <HipReplacementContent></HipReplacementContent>
      <HipReplacementDifferentTypes></HipReplacementDifferentTypes>
      <HipReplacementSteps></HipReplacementSteps>
      <HipReplacementPreparation></HipReplacementPreparation>
      <HipReplacementExpectation></HipReplacementExpectation>
      <HipReplacementRisks></HipReplacementRisks>
    </div>
  );
}
