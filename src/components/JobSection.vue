<template>
    <div class="has-text-weight-bold is-size-2">
        Work History
    </div>

    <section class="section">
        <div class="container" v-if="filteredWorkPlaces">
            <JobListing v-for="(workplace, index) in filteredWorkPlaces" v-bind:key="index" v-bind:workplace="workplace"/>
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
            workPlaces: WorkHistory.workPlaces,
            filteredWorkPlaces: [],
        }
    },

    mounted() {
        for (let i = 0; i < this.workPlaces.length; i++) {
            if (this.workPlaces[i].showOnResume === true) {
                this.filteredWorkPlaces.push(this.workPlaces[i]);
            }
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
