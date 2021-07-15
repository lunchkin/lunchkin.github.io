import SkillCard from "@/components/SkillCard";
import skills from "./../data/Skills.json";

export default {
    name: "SkillsSection",
    components: {SkillCard},

    data: function() {
        return {
            skills: skills.skills,
            proficientProgrammingLanguages: skills.proficientProgrammingLanguages,
            familiarProgrammingLanguages: skills.familiarProgrammingLanguages,
            software: skills.software,
        }
    },
}