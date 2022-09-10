<template>
    <Home/>
    <Footer/>
</template>

<script>
import Home from "@/views/Home";
import Footer from "@/components/Footer";

document.title = 'Robert Kinney';

export default {
    name: 'App',
    components: {
        Footer,
        Home
    }
}
</script>

<style lang="scss">
@import './scss/theme.scss';
</style>
