import SkillCard from "@/components/SkillCard";
import skills from "./../data/Skills.json";

export default {
    name: "SkillsSection",
    components: {SkillCard},

    data: function() {
        return {
            proficientSkills: skills.proficientSkills,
            familiarSkills: skills.familiarSkills,
            filteredWorkPlaces: [],
        }
    },
}