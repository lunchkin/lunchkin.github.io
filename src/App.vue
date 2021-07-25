<template>
    <AboutMeSection/>
    <JobSection/>
    <SkillsSection/>
    <Footer/>
</template>

<script>
import AboutMeSection from "@/components/AboutMeSection";
import JobSection from "@/components/JobSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

document.title = 'Robert Kinney';

export default {
    name: 'App',
    components: {
        SkillsSection,
        AboutMeSection,
        JobSection,
        Footer
    }
}
</script>

<style lang="scss">
@import './scss/theme.scss';
</style>
