<template>
    <div class="skillsSection">
        <div class="has-text-weight-bold is-size-2">
            {{ skillData.sectionHeader }}
        </div>

        <section class="section container">
            <div class="columns is-multiline">
                <div
                    v-for="(skillSection, index) in skillData.skillsFull"
                    :key="index"
                    class="column is-full-mobile is-half-tablet is-half-desktop"
                >
                    <h1>{{ skillSection.name }}</h1>
                    <SkillImage
                        v-for="(skill, index) in skillSection.skills"
                        :key="index"
                        :imageSlug="skill.imageSlug"
                        :name="skill.name"
                        :link="skill.link"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SkillImage from "@/components/SkillImage";
import skills from "./../data/Skills.json";

export default {
    name: "SkillsSection",
    components: { SkillImage },

    data: function() {
        return {
            skillData: skills,
        }
    },
}
</script>

<style lang="scss" scoped>
.skillsSection {
    background-color: #1F2833;
    color: #C5C6C7;
}
</style>