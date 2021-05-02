<template>
    <div class="job-listing shadow-box">
        <div class="columns job-card-header">
            <div class="column has-text-left-tablet has-text-left-desktop is-flex-wrap-nowrap">
                <h1 class="title">Oaklawn Psychiatric Center</h1>
                <h2 class="subtitle">Master at Arms 3rd Class Petty Officer</h2>
                JAN 2020 - FEB 2020
            </div>
        </div>

        <div class="columns job-responsibilities">
            <div class="column has-text-left">
                <ul>
                    <li>Something I did</li>
                    <li>Something I did</li>
                    <li>Something I did</li>
                    <li>Something I did</li>
                    <li>Something I did</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JobListing"
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

.shadow-box {
    border:8px outset #999;
    -webkit-box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
    -moz-box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
}
</style>