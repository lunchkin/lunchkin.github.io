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