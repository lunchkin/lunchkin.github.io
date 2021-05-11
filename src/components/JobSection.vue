<template>
    <section class="section">
        <div class="tile is-ancestor">
<!--            Loop through getting all odd elements-->
            <div class="tile is-6 is-vertical is-parent">
                <div class="tile is-child">
                    <JobListing v-bind:workplace="workHistory[0]"/>
                </div>

                <div class="tile is-child">
                    <JobListing v-bind:workplace="workHistory[0]"/>
                </div>
            </div>

<!--            Loop through getting all even elements-->
            <div class="tile is-6 is-vertical is-parent">
                <div class="tile is-child">
                    <JobListing v-bind:workplace="workHistory[0]"/>
                </div>

                <div class="tile is-child">
                    <JobListing v-bind:workplace="workHistory[0]"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import JobListing from "@/components/JobListing";
import WorkHistory from "./../data/WorkHistory.json";

// Import the job json data here

export default {
    name: 'JobSection',
    components: {JobListing},
    data: function() {
        return {
            workHistory: WorkHistory.workHistory
        }
    }
}
</script>

<style scoped>
.add-padding {
    padding: .5rem;
}
.job-card-header {
    background-color: lightblue;
    border-radius: 10px 10px 0 0;
}

.job-responsibilities {
    background-color: lightcoral;
    border-radius: 0 0 10px 10px;
}

.shadow-box {
    border:8px outset #999;
    -webkit-box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
    -moz-box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
}

</style>
