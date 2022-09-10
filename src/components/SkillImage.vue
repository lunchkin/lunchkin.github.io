<template>
    <a
        class="skillImageContainer"
        :href="link"
    >
        <figure class="image is-64x64">
            <img
                :alt="imageSlug"
                class="skill-image"
                :src="require(`./../assets/skillIcons/${imageSlug}.png`)"
            >
        </figure>

        <p class="skillName">{{name}}</p>
    </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    imageSlug: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});
</script>

<style lang="scss" scoped>
.skillImageContainer {
    width: fit-content;
    display: inline-block;
    padding: .5rem;
    color: #ffffff;
}

.image {
    margin: 0 auto;
}

@media only screen and (min-width: 1024px) {
    .skillImageContainer {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        transition: transform .2s;

        &:hover {
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
            transform: scale(1.1);
            text-decoration: underline
        }
    }
}
</style>