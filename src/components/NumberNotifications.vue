<template>
  <span></span>
</template>

<script lang="ts">
import tecsusAPI from '../base_urls/baseUrlDynamic';
import { getBaseUrl } from '../base_urls/baseUrlDynamic';
import { defineComponent, onMounted } from 'vue';
import eventBus from '../eventBus';

export default defineComponent({
  name: 'EventListenerComponent',
  
  setup() {
    onMounted(() => {
      eventBus.on('app-created', (message: string) => {
        console.log(message);
      });
    });
  },

  data() {
    return {
      notifications: [],
      watter: [],
      wastepipe: [],
      energyA: [],
      energyB: [],
    }
  },

  mounted() {
    this.getNotifications()
  },

  created() {
    eventBus.on('update-notifications', (update: boolean) => {
      this.getNotifications()
    })
  },

  methods: {

    closeNotifications() {
      eventBus.emit('close-notifications', false)
    },

    async getNotifications() {

      const baseUrl = await getBaseUrl();
      tecsusAPI.defaults.baseURL = baseUrl;

      try {

        const response = await tecsusAPI.get('/alerts');
        this.watter = response.data.watter;
        this.wastepipe = response.data.wastepipe;
        this.energyA = response.data.energyA;
        this.energyB = response.data.energyB;
        this.notifications = [...this.watter, ...this.wastepipe, ...this.energyA, ...this.energyB];

        eventBus.emit('number-notifications', this.notifications.length);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    },

  },

  computed: {
    numberOfNotifications() {
      return eventBus.emit('number-notifications', this.notifications.length)
    }
  }
})
</script>

<style scoped>
span {
  display: none;
}
</style>
