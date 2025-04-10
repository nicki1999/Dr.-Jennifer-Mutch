import KneeReplacementIntroduction from "./components/Expertise/KneeReplacement//KneeReplacementIntroduction";
import KneeReplacementContent from "./components/Expertise/KneeReplacement/KneeReplacementContent";
import KneeReplacementTargetAudience from "./components/Expertise/KneeReplacement/KneeReplacementTargetAudience";
import KneeReplacementDifferentTypes from "./components/Expertise/KneeReplacement/KneeReplacementDifferentTypes";
import KneeReplacementPreparation from "./components/Expertise/KneeReplacement/KneeReplacementPreparation";
import KneeReplacementSteps from "./components/Expertise/KneeReplacement/KneeReplacementSteps";
import KneeReplacementExpectation from "./components/Expertise/KneeReplacement/KneeReplacementExpectation";
import KneeReplacementRisks from "./components/Expertise/KneeReplacement/KneeReplacementRisks";
export default function KneeReplacement() {
  return (
    <div>
      <KneeReplacementIntroduction></KneeReplacementIntroduction>
      <KneeReplacementTargetAudience></KneeReplacementTargetAudience>
      <KneeReplacementContent></KneeReplacementContent>
      <KneeReplacementDifferentTypes></KneeReplacementDifferentTypes>
      <br />
      <br />
      <KneeReplacementSteps></KneeReplacementSteps>
      <KneeReplacementPreparation></KneeReplacementPreparation>
      <KneeReplacementExpectation></KneeReplacementExpectation>
      <KneeReplacementRisks></KneeReplacementRisks>
    </div>
  );
}
