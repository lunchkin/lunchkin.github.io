<link rel="stylesheet" href="../scss/job-listing.scss">
<template>
    <div class="job-listing shadow-box">
        <div class="columns job-card-header">
            <div class="column has-text-left-tablet has-text-left-desktop is-flex-wrap-nowrap">
                <h1 class="title"><a v-bind:href="workplace.siteURL">{{workplace.workplace}}</a></h1>
                <h2 class="subtitle">{{workplace.jobTitle}}</h2>
                {{workplace.startDate}} - {{workplace.endDate}}
            </div>
        </div>

        <div class="columns job-responsibilities">
            <div class="column has-text-left">
                <ul>
                    <li v-for="(responsibility, index) in workplace.responsibilities" :key="index">{{responsibility}}</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="job-listing new-job-listing">
        <div class="columns job-header is-mobile is-vcentered">
            <div class="column job-picture is-narrow">
                <img v-bind:src="require(`../assets/workplacePictures/${workplace.imageName}`)" height="200" width="200"/>

            </div>

            <div class="column has-text-left is-6-mobile is-6-tablet">
                {{workplace.workplace}}
                <br>
                {{workplace.startDate}} - {{workplace.endDate}}
            </div>
        </div>
        <ul class="list has-text-left">
            <li v-for="(task, index) in workplace.responsibilities" v-bind:key="index">{{ task }}</li>
        </ul>
    </div>
</template>

<script>
import JobListing from "@/scripts/JobListing";
export default JobListing;
</script>

<style lang="scss" scoped>
@import './src/scss/job-listing.scss';
</style>