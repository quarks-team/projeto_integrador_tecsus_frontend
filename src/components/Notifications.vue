<template>
  <div class="notifications">
    <button class="button-close" @click.prevent="closeNotifications">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <h2 class="title">
      Notifications
      <div class="notification-filter">
        <b
          @click.prevent="watterAlert = !watterAlert"
          :style="
            watter === true
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
          ">Watter</b>
        <b
          @click.prevent="wastePipeAlert = !wastePipeAlert"
          :style="
            wastePipeAlert === true
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
          ">Waste Pipe</b>
        <b
          @click.prevent="energy_A_Alert = !energy_A_Alert"
          :style="
            energy_A_Alert === true
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
          ">Energy A</b>
        <b
          @click.prevent="energy_B_Alert = !energy_B_Alert"
          :style="
            energy_B_Alert === true
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
          ">Energy B</b>
        <!-- <b
          @click.prevent="sinkAlert = !sinkAlert"
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
          >Sink</b
        > -->
      </div>
    </h2>

    <div class="card-notification" v-for="n in watter" :key="n.id">  
      <b style="background-color: #548644;">!</b>
      <h5>Client Unity ID: {{ n.clientUnityId }}</h5>
      <h5>{{ `Watter Contract ID: ${n.watterContractId}` }}</h5>
      <h4>Consumo de água: {{ n.watterConsume }}</h4> 
      <h4>Média Trimestral: {{ n.quarterlyAverage }}</h4>
      <h4>Excesso Percentual: {{ n.percentageExcess }}</h4>
      <h6>Data do alerta: {{ n.alertDate }}</h6>
      <button class="button-delete" @click.prevent="deleteNotification(n.id)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>

    <div class="card-notification" v-for="n in wastepipe" :key="n.id">  
      <b style="background-color: #548644;">!</b>
      <h5>Client Unity ID: {{ n.clientUnityId }}</h5>
      <h5>{{ `Watter Contract ID: ${n.watterContractId}` }}</h5>
      <h4>Consumo de água: {{ n.watterConsume }}</h4> 
      <h4>Média Trimestral: {{ n.quarterlyAverage }}</h4>
      <h4>Excesso Percentual: {{ n.percentageExcess }}</h4>
      <h6>Data do alerta: {{ n.alertDate }}</h6>
      <button class="button-delete" @click.prevent="deleteNotification(n.id)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>

    <div class="card-notification" v-for="n in energyA" :key="n.id">  
      <b style="background-color: #548644;">!</b>
      <h5>Client Unity ID: {{ n.clientUnityId }}</h5>
      <h5>{{ `Energy Contract ID: ${n.energyContractId}` }}</h5>
      <h4>Consumo de água: {{ n.watterConsume }}</h4> 
      <h4>Média Trimestral: {{ n.quarterlyAverage }}</h4>
      <h4>Excesso Percentual: {{ n.percentageExcess }}</h4>
      <h6>Data do alerta: {{ n.alertDate }}</h6>
      <button class="button-delete" @click.prevent="deleteNotification(n.id)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>

    <div class="card-notification" v-for="n in energyB" :key="n.id">  
      <b style="background-color: #548644;">!</b>
      <h5>Client Unity ID: {{ n.clientUnityId }}</h5>
      <h5>{{ `Energy Contract ID: ${n.energyContractId}` }}</h5>
      <h4>Consumo de água: {{ n.watterConsume }}</h4> 
      <h4>Média Trimestral: {{ n.quarterlyAverage }}</h4>
      <h4>Excesso Percentual: {{ n.percentageExcess }}</h4>
      <h6>Data do alerta: {{ n.alertDate }}</h6>
      <button class="button-delete" @click.prevent="deleteNotification(n.id)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
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
      watterAlert: true,
      wastePipeAlert: true,
      energy_A_Alert: true,
      energy_B_Alert: true,
      // sinkAlert: true,
      watter: {},
      wastepipe: {},
      energyA: {},
      energyB: {},
      // filteredWatter: {},
      // filteredWastePipe: {},
      // filteredEnergyA: {},
      // filteredEnergyB: {},
      // filteredSink: {},
    }
  },

  mounted() {
    this.getNotifications()
  },

  created() {
    // this.filterWatterConsume()
    // this.filterQuarterlyAverage()
    // this.filterPercentageExcess()

    eventBus.on('update-notifications', (update: boolean) => {
      this.getNotifications()
    })
  },

  watch: {
    // watterConsume: function () {
    //   this.filterWatterConsume()
    // },

    // quarterlyAverage: function () {
    //   this.filterQuarterlyAverage()
    // },

    // percentageExcess: function () {
    //   this.filterPercentageExcess()
    // }
  },

  methods: {

    closeNotifications() {
      eventBus.emit('close-notifications', false)
    },

    async getNotifications() {

      const response = await axios.get('http://localhost:3000/alerts')

      this.watter = response.data.watter.map((item: String) => ({ 
                    id: item.id,
                    watterContractId: item.watterContractId,
                    clientUnityId: item.clientUnityId,
                    plantId: item.plantId,
                    alertDate: item.alertDate,
                    watterConsume: item.watterConsume,
                    quarterlyAverage: item.quarterlyAverage,
                    percentageExcess: item.percentageExcess
                }));

      this.wastepipe = response.data.wastepipe.map((item: String) => ({ 
                    id: item.id,
                    watterContractId: item.watterContractId,
                    clientUnityId: item.clientUnityId,
                    plantId: item.plantId,
                    alertDate: item.alertDate,
                    watterConsume: item.watterConsume,
                    quarterlyAverage: item.quarterlyAverage,
                    percentageExcess: item.percentageExcess,
                }));

      this.energyA = response.data.energyA.map((item: String) => ({ 
                    id: item.id,
                    energyContractId: item.energyContractId,
                    clientUnityId: item.clientUnityId,
                    plantId: item.plantId,
                    alertDate: item.alertDate,
                    watterConsume: item.watterConsume,
                    quarterlyAverage: item.quarterlyAverage,
                    percentageExcess: item.percentageExcess,
                }));

      this.energyB = response.data.energyB.map((item: String) => ({ 
                    id: item.id,
                    energyContractId: item.energyContractId,
                    clientUnityId: item.clientUnityId,
                    plantId: item.plantId,
                    alertDate: item.alertDate,
                    watterConsume: item.watterConsume,
                    quarterlyAverage: item.quarterlyAverage,
                    percentageExcess: item.percentageExcess,
                }));

      this.notifications = [...this.watter, ...this.wastepipe, ...this.energyA, ...this.energyB]

      eventBus.emit('number-notifications', this.notifications.length)
    },

    // filterWatterConsume() {
    //   if (!this.watterAlert) {
    //     this.filteredWatter = this.watter.sort((a, b) => {
    //       return a.watterConsume.length - b.watterConsume.length;
    //   });
    //     this.notifications = this.notifications.watter.sort((a, b) => {
    //       return a.watterConsume.length - b.watterConsume.length; 
    //   });
    //   } else if (!this.energy_A_Alert) {
    //     this.filteredEnergyA = this.energyA.sort((a, b) => {
    //       return a.watterConsume.length - b.watterConsume.length; 
    //   });
    //     this.notifications = this.notifications.energyA.sort((a, b) => {
    //       return a.watterConsume.length - b.watterConsume.length; 
    //   });
    //   } else if (!this.energy_B_Alert) {
    //     this.filteredEnergyB = this.energyB.sort((a, b) => {
    //       return a.watterConsume.length - b.watterConsume.length; 
    //   });
    //     this.notifications = this.notifications.energyB.sort((a, b) => {
    //       return a.watterConsume.length - b.watterConsume.length; 
    //   });
    //   } else if (!this.wastePipeAlert) {
    //     this.filteredWastePipe = this.wastepipe.sort((a, b) => {
    //       return a.watterConsume.length - b.watterConsume.length; 
    //   });
    //     this.notifications = this.notifications.wastepipe.sort((a, b) => {
    //       return a.watterConsume.length - b.watterConsume.length; 
    //   });
    //   } else {
    //     this.notifications.push(
    //       ...this.filteredWatter, ...this.filteredEnergyA, 
    //       ...this.filteredEnergyB, ...this.filteredWastePipe
    //     )
    //   }
    // },

    // filterQuarterlyAverage() {
    //   if (!this.watterAlert) {
    //     this.filteredWatter = this.watter.sort((a, b) => {
    //       return a.quarterlyAverage.length - b.quarterlyAverage.length;
    //   });
    //     this.notifications = this.notifications.watter.sort((a, b) => {
    //       return a.quarterlyAverage.length - b.quarterlyAverage.length; 
    //   });
    //   } else if (!this.energy_A_Alert) {
    //     this.filteredEnergyA = this.energyA.sort((a, b) => {
    //       return a.quarterlyAverage.length - b.quarterlyAverage.length; 
    //   });
    //     this.notifications = this.notifications.energyA.sort((a, b) => {
    //       return a.quarterlyAverage.length - b.quarterlyAverage.length; 
    //   });
    //   } else if (!this.energy_B_Alert) {
    //     this.filteredEnergyB = this.energyB.sort((a, b) => {
    //       return a.quarterlyAverage.length - b.quarterlyAverage.length; 
    //   });
    //     this.notifications = this.notifications.energyB.sort((a, b) => {
    //       return a.quarterlyAverage.length - b.quarterlyAverage.length; 
    //   });
    //   } else if (!this.wastePipeAlert) {
    //     this.filteredWastePipe = this.wastepipe.sort((a, b) => {
    //       return a.quarterlyAverage.length - b.quarterlyAverage.length; 
    //   });
    //     this.notifications = this.notifications.wastepipe.sort((a, b) => {
    //       return a.quarterlyAverage.length - b.quarterlyAverage.length; 
    //   });
    //   } else {
    //     this.notifications.push(
    //       ...this.filteredWatter, ...this.filteredEnergyA, 
    //       ...this.filteredEnergyB, ...this.filteredWastePipe
    //     )
    //   }
    // },

    // filterPercentageExcess() {
    //   if (!this.watterAlert) {
    //     this.filteredWatter = this.watter.sort((a, b) => {
    //       return a.percentageExcess.length - b.percentageExcess.length;
    //   });
    //     this.notifications = this.notifications.watter.sort((a, b) => {
    //       return a.percentageExcess.length - b.percentageExcess.length; 
    //   });
    //   } else if (!this.energy_A_Alert) {
    //     this.filteredEnergyA = this.energyA.sort((a, b) => {
    //       return a.percentageExcess.length - b.percentageExcess.length; 
    //   });
    //     this.notifications = this.notifications.energyA.sort((a, b) => {
    //       return a.percentageExcess.length - b.percentageExcess.length; 
    //   });
    //   } else if (!this.energy_B_Alert) {
    //     this.filteredEnergyB = this.energyB.sort((a, b) => {
    //       return a.percentageExcess.length - b.percentageExcess.length; 
    //   });
    //     this.notifications = this.notifications.energyB.sort((a, b) => {
    //       return a.percentageExcess.length - b.percentageExcess.length; 
    //   });
    //   } else if (!this.wastePipeAlert) {
    //     this.filteredWastePipe = this.wastepipe.sort((a, b) => {
    //       return a.percentageExcess.length - b.percentageExcess.length; 
    //   });
    //     this.notifications = this.notifications.wastepipe.sort((a, b) => {
    //       return a.percentageExcess.length - b.percentageExcess.length; 
    //   });
    //   } else {
    //     this.notifications.push(
    //       ...this.filteredWatter, ...this.filteredEnergyA, 
    //       ...this.filteredEnergyB, ...this.filteredWastePipe
    //     )
    //   }
    // },

    // filterSink() {
    //   if (!this.sink) {
    //     this.filteredSink = this.notifications.filter(
    //       (item) =>
    //         String(item.item_status) !== 'INCORPORATED' && String(item.item_status) !== 'APPLICABLE'
    //     )
    //     this.notifications = this.notifications.filter(
    //       (item) =>
    //         String(item.item_status) === 'INCORPORATED' || String(item.item_status) === 'APPLICABLE'
    //     )
    //   } else {
    //     this.notifications.push(...this.filteredSink)
    //   }
    // },
  },

  computed: {
    filteredWatter() {
      return this.notifications
    },

    filteredWastePipe() {
      return this.notifications
    },

    filteredEnergyA() {
      return this.notifications
    },

    filteredEnergyB() {
      return this.notifications
    },

    // filteredSink() {
    //   return this.notifications
    // },

    numberOfNotifications() {
      return eventBus.emit('number-notifications', this.notifications.length)
    }
  }
})
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
