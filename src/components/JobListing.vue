<template>
    <div class="job-listing shadow-box">
        <div class="columns job-card-header">
            <div class="column has-text-left-tablet has-text-left-desktop is-flex-wrap-nowrap">
                <h1 class="title">{{workplace.workplace}}</h1>
                <h2 class="subtitle">{{workplace.jobTitle}}</h2>
                {{workplace.startDate}} - {{workplace.endDate}}
            </div>
        </div>

        <div class="columns job-responsibilities">
            <div class="column has-text-left">
                <ul>
                    <li v-for="responsibility in workplace.responsibilities" :key="responsibility">{{responsibility}}</li>
                </ul>
            </div>
        </div>
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
</style>