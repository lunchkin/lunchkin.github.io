<template>
    <AboutMeSection/>
    <JobSection/>
    <SkillsSection/>
</template>

<script>
import AboutMeSection from "@/components/AboutMeSection";
import JobSection from "@/components/JobSection";
import SkillsSection from "@/components/SkillsSection";

document.title = 'Robert Kinney';

export default {
    name: 'App',
    components: {
        SkillsSection,
        AboutMeSection,
        JobSection,
    }
}
</script>
