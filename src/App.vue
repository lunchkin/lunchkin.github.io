<template>
    <DiagonalSection/>
    <JobSection/>
    <SkillsSection/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DiagonalSection from "@/components/DiagonalSection";
import JobSection from "@/components/JobSection";
import SkillsSection from "@/components/SkillsSection";

// TODO: See Comments below
// About me paragraph - Put between header section and job section.
// skills Section
// Software Section
// Projects

export default {
    name: 'App',
    components: {
        SkillsSection,
        HelloWorld,
        DiagonalSection,
        JobSection
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
