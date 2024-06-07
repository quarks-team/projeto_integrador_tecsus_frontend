<template>
    <span></span>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '../main';

export default {

    data() {
        return {
            notifications: [],
            water: true,
            energy: true,
            sink: true,
            filteredWater: [],
            filteredEnergy: [],
            filteredSink: [],
        }
    },

    mounted() {
        this.getNotifications();
    },

    created() {  

        eventBus.$on('update-notifications', (update: boolean) => {
            this.getNotifications();
        });
    },

    methods: {

        closeNotifications() {
            eventBus.$emit('close-notifications', false)
        },

        async getNotifications() {

            const response = await axios.get('http://localhost:8080/list-all-notifications-admin');

            this.notifications = response.data.map((item: String) => ({ 
                id: item.id
            }));

            eventBus.$emit('number-notifications', this.notifications.length)

        },

    },

    computed: {

        numberOfNotifications() {
            return eventBus.$emit('number-notifications', this.notifications.length)
        },

    },

}
</script>

<style scoped>
span {
    display: none;
}
</style>