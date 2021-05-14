<link rel="stylesheet" href="../../public/scss/_variables.scss">
<template>
    <section class="section">
        <div class="columns is-vcentered">
            <div class="column">
                <div class="has-text-left-desktop has-text-left-tablet">
                    <h1 class="title">Robert Kinney</h1>
                    <h2 class="subtitle">
                        Web Developer
                        <br>
                        rkinney333@gmail.com
                    </h2>
                </div>

                <div class="columns is-centered is-mobile has-text-centered">
                    <div class="column  has-text-centered-mobile  has-text-left-tablet has-text-left-desktop">
                        <SocialMedia/>
                    </div>
                </div>
            </div>

            <div class="column">
                A picture with me
            </div>
        </div>
    </section>
</template>

<script>
import SocialMedia from "@/components/SocialMedia";
import "@/scss/_variables.scss";
export default {
    name: 'DiagonalSection',
    components: {
        SocialMedia
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../scss/_variables.scss";

</style>
