<template>
    <div  class="jobSection">
        <div class="has-text-weight-bold is-size-2">
            Work History
        </div>

        <section class="section">
            <div class="container" v-if="filteredWorkPlaces">
                <JobListing
                    v-for="(workplace, index) in filteredWorkPlaces"
                    v-bind:key="index"
                    v-bind:workplace="workplace"
                />
            </div>
        </section>
    </div>
</template>

<script>
import JobListing from "@/components/JobListing";
import WorkHistory from "@/data/WorkHistory.json";

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

<style lang="scss" scoped>
.jobSection {
    background-color: #C5C6C7;
}
</style>
