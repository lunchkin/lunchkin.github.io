<template>
    <DiagonalSection/>
    <JobSection/>
    <SkillsSection/>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Footer/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import DiagonalSection from "@/components/DiagonalSection";
import JobSection from "@/components/JobSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

// TODO: See Comments below
// About me paragraph - Put between header section and job section.
// skills Section
// Software Section
// Projects

export default {
    name: 'App',
    components: {
        SkillsSection,
       // HelloWorld,
        DiagonalSection,
        JobSection,
        Footer
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
