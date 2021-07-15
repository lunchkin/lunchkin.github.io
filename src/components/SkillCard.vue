<template>
    <div class="skillCard">
        <span class="is-centered is-vcentered has-text-centered">{{ skill.name }}</span>
    </div>
</template>

<script>
export default {
    name: "SkillCard.vue",
    props: {
        skill: Object
    }
}
</script>

<style scoped>
.skillCard {
    background-color: #66FCF1;
    width: fit-content;
    padding: .5rem;
    display: inline-block;
    margin: .25rem;
    color: #0B0C10;
    border-radius: 5px;
}
</style>