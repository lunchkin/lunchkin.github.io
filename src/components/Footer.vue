<template>
    <section class="section Footer">
        <div class="columns">
            <div class="column">
                <h2 class="footerEmail">rkinney333@gmail.com</h2>
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

<style lang="scss" scoped>
.Footer {
    background-color: #2c3e50;
    color: #FFFFFF;

    /*background: linear-gradient(#41c7b4 50%, #ff7c4a 50%);*/
}

.footerEmail {
    padding: 1em 0;
    font-weight: bold;
    font-size: 1.5rem;
}
</style>