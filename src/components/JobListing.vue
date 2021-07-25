<link rel="stylesheet" href="../scss/job-listing.scss">
<template>
    <div class="job-listing new-job-listing">
        <div class="columns job-header is-vcentered">
            <div class="column job-picture is-narrow-tablet is-narrow-desktop is-12-mobile">
                <a :href="workplace.siteURL">
                    <img class="job-image" v-bind:src="require(`../assets/workplacePictures/${workplace.imageName}`)" height="200" width="200"/>
                </a>
            </div>

            <div class="column has-text-left is-12-mobile is-6-tablet has-text-centered-mobile has-text-left-tablet">
                <a class="job-title" :href="workplace.siteURL">{{workplace.workplace}}</a>
                <br>
                {{workplace.startDate}} - {{workplace.endDate}}
            </div>
        </div>
        <ul class="task-list list has-text-left">
            <li v-for="(task, index) in workplace.responsibilities" v-bind:key="index">{{ task }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "JobListing",
    props: {
        workplace: Object
    },
}
</script>

<style lang="scss" scoped>
@import './src/scss/job-listing.scss';
</style>