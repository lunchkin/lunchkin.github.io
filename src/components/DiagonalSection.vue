<link rel="stylesheet" href="../../public/scss/_variables.scss">
<template>
    <section class="section top-section">
        <div class="container is-vcentered top-container">
            <h1 class="light-green-text title is-size-1-desktop is-size-1-tablet">Robert Kinney</h1>
            <h2 class="light-green-text subtitle is-size-2-desktop is-size-2-tablet">Web Developer</h2>
            <img class="myPicture" src="../assets/Robert2020.jpg" height="1323" width="1324" alt="A picture of me"/>
            <h2 class="light-green-text subtitle is-size-4">rkinney333@gmail.com</h2>
            <SocialMedia/>

            <div class="aboutMeSection">
                <h2 class="light-green-text title is-size-1-desktop is-size-1-tablet">Hello!</h2>
                <p class="light-green-text aboutMe has-text-left">
                    I've always found technology to be fascinating and I'm thankful to have a skill set that allows me to explore that interest. Being able to work towards making something new, or making something better, is what drives me in this field.
                    <br><br>
                    The world has a lot of problems. Thankfully, a lot of those problems can be solved with the use of computers and a bit of programming knowledge. From data management to complex computations, I enjoy using technology to find solutions.
                </p>
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

.top-section {
    background-color: #1F2833;

    .light-green-text {
        color: #66FCF1;
    }

    .dark-text {
        color: #0B0C10;
    }

    .aboutMeSection {
        color: #66FCF1;
        padding-top: 2em;
    }

    .name-title-email {
        background-color: #C5C6C7;
        padding-bottom: 1rem;
        border-radius: 10px 10px 0 0;
    }

    .contact-helper {
        max-width: 20rem;
        margin: auto;
    }

    .no-LR-margin{
        margin-right: 0;
        margin-left: 0;
    }

    .about-social-media {
        background-color: #0B0C10;
        border-radius: 0 0 10px 10px;
    }
}

.myPicture {
    max-height: 10rem;
    width: auto;
    border-radius: 50%;
    border: 2px #66FCF1 solid;
}
</style>
