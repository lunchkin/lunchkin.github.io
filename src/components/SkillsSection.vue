<template>
    <div class="skillsSection">
        <div class="has-text-weight-bold is-size-2">
            Skills
        </div>

        <section class="section container">
            <div class="columns is-multiline">
                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Skills</h1>
                    <SkillImage
                        v-for="(skill, index) in skills"
                        :key="index"
                        :imageSlug="skill.imageSlug"
                        :name="skill.name"
                        :link="skill.link"
                    />
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Proficient Programming Languages</h1>
                    <SkillImage
                        v-for="(skill, index) in proficientProgrammingLanguages"
                        :key="index"
                        :imageSlug="skill.imageSlug"
                        :name="skill.name"
                        :link="skill.link"
                    />
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Familiar Programming Languages</h1>
                    <SkillImage
                        v-for="(skill, index) in familiarProgrammingLanguages"
                        :key="index"
                        :imageSlug="skill.imageSlug"
                        :name="skill.name"
                        :link="skill.link"
                    />
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Software Used</h1>
                    <SkillImage
                        v-for="(skill, index) in software"
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
    components: {SkillImage},

    data: function() {
        return {
            skills: skills.skills,
            proficientProgrammingLanguages: skills.proficientProgrammingLanguages,
            familiarProgrammingLanguages: skills.familiarProgrammingLanguages,
            software: skills.software,
        }
    },
}
</script>

<style lang="scss" scoped>
.skillsSection {
    background-color: #1F2833;
    color: #C5C6C7;
}

.white-bg {
    border: 2px solid #ffffff;
    cursor: pointer;
}

.skill-image {
    cursor: pointer;
}

@media only screen and (min-width: 1024px) {
    .skill-image {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        transition: transform .2s;

        &:hover {
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
            transform: scale(1.1);
        }
    }
}

</style>