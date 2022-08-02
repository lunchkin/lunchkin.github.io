<template>
    <div class="skillsSection">
        <div class="has-text-weight-bold is-size-2">Skills</div>
        <section class="section container">
            <div class="columns is-multiline">
                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Skills</h1>
                    <SkillCard
                        v-for="(skill, index) in skills"
                        v-bind:key="index"
                        v-bind:skill="skill"
                    />
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Proficient Programming Languages</h1>
                    <SkillCard
                        v-for="(skill, index) in proficientProgrammingLanguages"
                        v-bind:key="index"
                        v-bind:skill="skill"
                    />
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Familiar Programming Languages</h1>
                    <SkillCard
                        v-for="(skill, index) in familiarProgrammingLanguages"
                        v-bind:key="index"
                        v-bind:skill="skill"
                    />
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Software Used</h1>
                    <SkillCard
                        v-for="(skill, index) in software"
                        v-bind:key="index"
                        v-bind:skill="skill"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
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
</script>

<style lang="scss" scoped>
.skillsSection {
    background-color: #1F2833;
    color: #C5C6C7;
}
</style>