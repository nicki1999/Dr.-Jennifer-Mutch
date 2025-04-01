import ExpertiseIntroduction from "./components/Expertise/ExpertiseIntroduction";
import ExpertiseContent from "./components/Expertise/ExpertiseContent";
import ExpertiseTargetAudience from "./components/Expertise/ExpertiseTargetAudience";
import ExpertiseDifferentTypes from "./components/Expertise/ExpertiseDifferentTypes";
import ExpertisePreparation from "./components/Expertise/ExpertisePreparation";
export default function KneeReplacement() {
  return (
    <div>
      <ExpertiseIntroduction></ExpertiseIntroduction>
      <ExpertiseTargetAudience></ExpertiseTargetAudience>
      <ExpertiseContent></ExpertiseContent>
      <ExpertiseDifferentTypes></ExpertiseDifferentTypes>
      <ExpertisePreparation></ExpertisePreparation>
    </div>
  );
}
