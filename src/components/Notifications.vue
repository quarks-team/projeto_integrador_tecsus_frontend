<template>
  <div class="notifications">
    <button class="button-close" @click.prevent="closeNotifications">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h2 class="title">
      Notifications
      <div class="notification-filter">
        <b
          @click.prevent="water = !water"
          :style="
            water === true
              ? {
                  'background-color': '#004AEB',
                  color: 'white',
                  'white-space': 'nowrap',
                  overflow: 'hidden',
                  'text-overflow': 'ellipsis'
                }
              : {
                  'background-color': 'transparent',
                  color: '#004AEB',
                  'white-space': 'nowrap',
                  overflow: 'hidden',
                  'text-overflow': 'ellipsis'
                }
          "
          >water</b
        >
        <b
          @click.prevent="energy = !energy"
          :style="
            energy === true
              ? {
                  'background-color': '#004AEB',
                  color: 'white',
                  'white-space': 'nowrap',
                  overflow: 'hidden',
                  'text-overflow': 'ellipsis'
                }
              : {
                  'background-color': 'transparent',
                  color: '#004AEB',
                  'white-space': 'nowrap',
                  overflow: 'hidden',
                  'text-overflow': 'ellipsis'
                }
          "
          >energy</b
        >
        <b
          @click.prevent="sink = !sink"
          :style="
            sink === true
              ? {
                  'background-color': '#004AEB',
                  color: 'white',
                  'white-space': 'nowrap',
                  overflow: 'hidden',
                  'text-overflow': 'ellipsis'
                }
              : {
                  'background-color': 'transparent',
                  color: '#004AEB',
                  'white-space': 'nowrap',
                  overflow: 'hidden',
                  'text-overflow': 'ellipsis'
                }
          "
          >New Sb</b
        >
      </div>
    </h2>

    <div class="card-notification" v-for="n in notifications" :key="n.id">
      <h4
        v-if="
          (n.operation === 'Changed Sb status' ||
            n.operation === 'Unlocking items by the new Sb') &&
          n.item_status === 'INCORPORATED'
        "
        @click.prevent="divClickToWater(n.chassis_associate)"
      >
        water "{{ n.item }}" in chassis {{ n.chassis_associate }}
        <b
          :style="
            n.item_status === 'INCORPORATED'
              ? { 'background-color': '#548644', color: 'white' }
              : { 'background-color': '#7CF0BD', color: 'white' }
          "
          >{{ n.item_status }}</b
        >
        <button class="button-delete" @click.prevent="deleteNotification(n.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </h4>
      <h5
        v-if="
          (n.operation === 'Changed Sb status' ||
            n.operation === 'Unlocking items by the new Sb') &&
          n.item_status === 'APPLICABLE'
        "
        @click.prevent="divClickToWater(n.chassis_associate)"
      >
        energy of "{{ n.item }}" unlocking in chassis {{ n.chassis_associate }}
      </h5>

      <h4
        v-if="n.operation === 'Changed Sb status'"
        @click.prevent="divClickToEnergy(n.sb_name, n.sb_part)"
      >
        By change in {{ n.sb_name }} {{ n.sb_part }} for <b>{{ n.sb_status_change }}</b>
        <b
          :style="
            n.item_status === 'INCORPORATED'
              ? { 'background-color': '#548644', color: 'white' }
              : { 'background-color': '#7CF0BD', color: 'white' }
          "
          >{{ n.item_status }}</b
        >
        <button class="button-delete" @click.prevent="deleteNotification(n.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </h4>
      <h5
        v-if="n.operation === 'Unlocking items by the new Sb'"
        @click.prevent="divClickToEnergy(n.sb_name, n.sb_part)"
      >
        By creation of {{ n.sb_name }} {{ n.sb_part }} with status
        <p>{{ n.sb_status_change }}</p>
      </h5>

      <h4
        v-if="n.operation === 'Creation of new Sb'"
        @click.prevent="divClickToSink(n.chassis_associate)"
      >
        Creation of new Service Bulletin in chassis {{ n.chassis_associate }}
        <button class="button-delete" @click.prevent="deleteNotification(n.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </h4>
      <h5
        v-if="n.operation === 'Creation of new Sb'"
        @click.prevent="divClickToSink(n.sb_name, n.sb_part)"
      >
        {{ n.sb_name }} {{ n.sb_part }} with status {{ n.sb_status_change }}
      </h5>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { eventBus } from '../main'

export default {
  data() {
    return {
      notifications: [],
      water: true,
      energy: true,
      sink: true,
      filteredWater: [],
      filteredEnergy: [],
      filteredSink: []
    }
  },

  mounted() {
    this.getNotifications()
  },

  created() {
    this.filterWater()
    this.filterEnergy()
    this.filterSink()

    eventBus.$on('update-notifications', (update: boolean) => {
      this.getNotifications()
    })
  },

  watch: {
    water: function () {
      this.filterWater()
    },

    energy: function () {
      this.filterEnergy()
    },

    sink: function () {
      this.filterSink()
    }
  },

  methods: {
    closeNotifications() {
      eventBus.$emit('close-notifications', false)
    },

    async getNotifications() {
      const response = await axios.get('http://localhost:8080/list-all-notifications-admin')

      this.notifications = response.data.map((item: String) => ({
        id: item.id,
        user_modified: item.user_modified,
        user_owner: item.user_owner,
        chassis_associate: item.chassis_associate,
        sb_name: item.sb_name,
        sb_part: item.sb_part,
        operation: item.operation,
        sb_status_change: item.sb_status_change,
        item: item.item,
        item_status: item.item_status,
        date_register: item.date_register
      }))

      eventBus.$emit('number-notifications', this.notifications.length)
    },

    async deleteNotification(id: Number) {
      await axios.get('http://localhost:8080/delete-notification/' + id)

      this.getNotifications()
    },

    filterWater() {
      if (!this.water) {
        this.filteredWater = this.notifications.filter(
          (item) => String(item.item_status) === 'INCORPORATED'
        )
        this.notifications = this.notifications.filter(
          (item) => String(item.item_status) !== 'INCORPORATED'
        )
      } else {
        this.notifications.push(...this.filteredWater)
      }
    },

    filterEnergy() {
      if (!this.energy) {
        this.filteredEnergy = this.notifications.filter(
          (item) => String(item.item_status) === 'APPLICABLE'
        )
        this.notifications = this.notifications.filter(
          (item) => String(item.item_status) !== 'APPLICABLE'
        )
      } else {
        this.notifications.push(...this.filteredEnergy)
      }
    },

    filterSink() {
      if (!this.sink) {
        this.filteredSink = this.notifications.filter(
          (item) =>
            String(item.item_status) !== 'INCORPORATED' && String(item.item_status) !== 'APPLICABLE'
        )
        this.notifications = this.notifications.filter(
          (item) =>
            String(item.item_status) === 'INCORPORATED' || String(item.item_status) === 'APPLICABLE'
        )
      } else {
        this.notifications.push(...this.filteredSink)
      }
    },

    divClickToWater() {
      this.$router.push({
        name: ''
      })

      this.closeNotifications()
    },

    divClickToEnergy() {
      this.$router.push({
        name: ''
      })

      this.closeNotifications()
    },

    divClickToSink() {
      this.$router.push({
        name: ''
      })

      this.closeNotifications()
    }
  },

  computed: {
    filteredWater() {
      return this.notifications
    },

    filteredEnergy() {
      return this.notifications
    },

    filteredSink() {
      return this.notifications
    },

    numberOfNotifications() {
      return eventBus.$emit('number-notifications', this.notifications.length)
    }
  }
}
</script>

<style>
@import '../assets/css/base.css';

/* Notificações */
.notifications {
  position: fixed;
  background-color: var(--platinum);
  border-radius: 10px;
  text-align: center;
  width: 90%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0px;
  box-shadow: 2px 2px 20px 5px var(--silver);
  transition: 2s;
  z-index: 9999;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  overflow: auto;
}

.card-notification {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: var(--white);
  text-align: start;
  box-shadow: 2px 2px 20px 5px var(--silver);
  border-radius: 10px;
  color: var(--roxo-secundario);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-left: 25px;
  margin-right: 25px;
  display: flex;
  align-items: center;
}

h4,
h5 {
  cursor: pointer;
}

h4 b {
  margin-left: 20px;
  border-radius: 15px;
  padding: 7px;
  opacity: 1;
}

h5 b {
  margin-left: 5px;
}

h6 i {
  margin-right: 7px;
}

.button-delete {
  background-color: transparent;
  border-color: transparent;
  width: 40px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
}

.button-delete i {
  font-size: 25px;
  color: #ae2a32;
  margin-left: 1rem;
}

.title {
  color: var(--azul-principal);
}

.button-close {
  background-color: transparent;
  border-color: transparent;
  width: 40px;
  height: auto;
  margin-left: auto;
  margin-right: 12px;
  cursor: pointer;
}

.button-close i {
  font-size: 40px;
  color: var(--azul-contraste);
}

.notification-filter {
  margin-left: 20%;
}

.notification-filter b {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 24px;
  border-radius: 15px;
  padding: 7px;
}
.notifications b {
  cursor: pointer;
}

/* --------------- Media Queries -------------------- */
/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {
  .notifications {
    padding: 0;
    width: 22rem;
    height: 25rem;
  }
  .title {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }

  .notification-filter {
    margin: 0;
    margin-top: 1rem;
  }
  .notification-filter b {
    font-size: 20px;
  }
  .button-close i {
    font-size: 30px;
  }
  .card-notification b {
    font-size: 12px;
  }

  .button-delete i {
    font-size: 20px;
  }
}
</style>
