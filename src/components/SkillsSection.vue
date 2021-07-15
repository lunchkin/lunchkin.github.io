<template>
    <div class="has-text-weight-bold is-size-2">Skills</div>
    <section class="section">
        <div class="columns is-multiline">
            <div class="column is-full-mobile is-half-tablet is-half-desktop">
                <h1>Proficient Skills</h1>
                <SkillCard v-for="(skill, index) in proficientSkills" v-bind:key="index" v-bind:skill="skill"/>
            </div>

            <div class="column is-full-mobile is-half-tablet is-half-desktop">
                <h1>Familiar Skills</h1>
                <SkillCard v-for="(skill, index) in familiarSkills" v-bind:key="index" v-bind:skill="skill"/>
            </div>
        </div>
    </section>
</template>

<script>
import SkillsSection from "@/scripts/SkillsSection";
export default SkillsSection;
</script>