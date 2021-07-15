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
                <img :src="imgURL(workplace.imageName)" height="200" width="200"/>
            </div>

            <div class="column has-text-left is-6-mobile is-6-tablet">
                {{workplace.workplace}}
                <br>
                {{workplace.startDate}} - {{workplace.endDate}}
            </div>
        </div>
        <ul class="list has-text-left">
            <li>Something I did</li>
            <li>Something I did</li>
            <li>Something I did</li>
            <li>Something I did</li>
            <li>Something I did</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "JobListing",
    props: {
        workplace: Object
    }
}
</script>

<style scoped>
.job-card-header {
    background-color: lightblue;
    border-radius: 10px 10px 0 0;
}

.job-responsibilities {
    background-color: lightcoral;
    border-radius: 0 0 10px 10px;
}

.job-listing {
    margin: 1rem 0;
}

.title a {
    color: inherit;
}

.job-picture {
    max-height: 100px;
    max-width: 100px;
}

.new-job-listing {
    background-color: lightblue;
    padding: .5rem;
}

.job-header {
    border-bottom: 1px solid black;
}
</style>