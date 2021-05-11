<template>
    <section class="section">
        <div class="columns is-multiline">
            <div class="column is-full-mobile is-half-tablet is-half-desktop">
                <h1>Proficient Skills</h1>

                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>


            </div>

            <div class="column is-full-mobile is-half-tablet is-half-desktop">
                <h1>Familiar Skills</h1>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
            </div>
        </div>
    </section>
</template>

<script>
import SkillCard from "@/components/SkillCard";

export default {
    name: "SkillsSection",
    components: {SkillCard}
}
</script>

<style scoped>

</style>