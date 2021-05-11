<template>
    <section class="section Footer">
        Footer
        <div class="columns">
            <div class="column">
                <h2>Email</h2>
                <SocialMedia/>
            </div>
        </div>
    </section>
</template>

<script>
import SocialMedia from "@/components/SocialMedia";

export default {
    name: "Footer.vue",
    components: {
        SocialMedia
    }
}
</script>

<style scoped>
.Footer {
    background-color: #2c3e50;
    color: #FFFFFF;
}
</style>