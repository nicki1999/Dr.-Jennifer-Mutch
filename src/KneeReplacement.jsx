import ExpertiseIntroduction from "./components/Expertise/ExpertiseIntroduction";
import ExpertiseContent from "./components/Expertise/ExpertiseContent";
import ExpertiseTargetAudience from "./components/Expertise/ExpertiseTargetAudience";
import ExpertiseDifferentTypes from "./components/Expertise/ExpertiseDifferentTypes";
import ExpertisePreparation from "./components/Expertise/ExpertisePreparation";
import ExpertiseSteps from "./components/Expertise/ExpertiseSteps";
import ExpertiseExpectation from "./components/Expertise/ExpertiseExpectation";
import ExpertiseRisks from "./components/Expertise/ExpertiseRisks";
export default function KneeReplacement() {
  return (
    <div>
      <ExpertiseIntroduction></ExpertiseIntroduction>
      <ExpertiseTargetAudience></ExpertiseTargetAudience>
      <ExpertiseContent></ExpertiseContent>
      <ExpertiseDifferentTypes></ExpertiseDifferentTypes>
      <br />
      <br />
      <ExpertiseSteps></ExpertiseSteps>
      <ExpertisePreparation></ExpertisePreparation>
      <ExpertiseExpectation></ExpertiseExpectation>
      <ExpertiseRisks></ExpertiseRisks>
    </div>
  );
}
