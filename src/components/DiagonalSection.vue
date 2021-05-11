<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="has-text-left-desktop has-text-left-tablet">
                    <h1 class="title">Robert Kinney</h1>
                    <h2 class="subtitle">
                        Web Developer
                        <br>
                        rkinney333@gmail.com
                    </h2>
                </div>

                <SocialMedia/>
            </div>

            <div class="column">
                A picture with me
            </div>
        </div>
    </section>
</template>

<script>
import SocialMedia from "@/components/SocialMedia";

export default {
    name: 'DiagonalSection',
    components: {
        SocialMedia
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
