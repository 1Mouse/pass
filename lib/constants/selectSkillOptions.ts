import SKILL_OPTIONS from "@/lib/constants/skillOptions";

const selectSkillOptions = SKILL_OPTIONS.map((skill) => ({value: skill, label: skill}));

export default selectSkillOptions;