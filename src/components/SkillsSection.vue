<template>
    <div class="skillsSection">
        <div class="has-text-weight-bold is-size-2">Skills</div>
        <section class="section">
            <div class="columns is-multiline">
                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Skills</h1>
                    <SkillCard v-for="(skill, index) in skills" v-bind:key="index" v-bind:skill="skill"/>
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Proficient Programming Languages</h1>
                    <SkillCard v-for="(skill, index) in proficientProgrammingLanguages" v-bind:key="index" v-bind:skill="skill"/>
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Familiar Programming Languages</h1>
                    <SkillCard v-for="(skill, index) in familiarProgrammingLanguages" v-bind:key="index" v-bind:skill="skill"/>
                </div>

                <div class="column is-full-mobile is-half-tablet is-half-desktop">
                    <h1>Software Used</h1>
                    <SkillCard v-for="(skill, index) in software" v-bind:key="index" v-bind:skill="skill"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SkillsSection from "@/scripts/SkillsSection";
export default SkillsSection;
</script>

<style lang="scss" scoped>
.skillsSection {
    background-color: #1F2833;
    color: #C5C6C7;
}
</style>