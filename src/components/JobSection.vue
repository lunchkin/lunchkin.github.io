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
import JobSection from "@/scripts/JobSection";
export default JobSection;
</script>
