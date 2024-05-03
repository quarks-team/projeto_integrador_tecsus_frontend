<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="main">
      <form @submit.prevent="sendData" ref="form">
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
          <input
            type="file"
            multiple
            name="file"
            id="fileInput"
            class="hidden-input"
            @change="onChange"
            ref="file"
            accept=".csv"
          />

          <label for="fileInput" class="file-label">
            <div v-if="isDragging" class="file-label-text">Drag files here</div>
            <div v-else class="file-label-text">
              Arraste os CSVs aqui ou <u>clique aqui</u> para fazer o download
            </div>
          </label>

          <div class="preview-container mt-4" v-if="files.length">
            <div v-for="(file, index) in files" :key="file.name" class="preview-card">
              <div>
                <img class="preview-img" :src="excel" />
                <p>
                  {{ file.name }}
                  ({{ Math.round(file.size / 1000) + 'kb' }})
                </p>
              </div>
              <div>
                <button
                  class="ml-2"
                  type="button"
                  @click="remove(index)"
                  title="Remover"
                >
                  <b>×</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button v-if="files.length !== 0" type="submit" class="submit">
          Enviar <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
          </svg>
        </button>
      </form>
    </div>
  </transition>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      isDragging: false,
      files: [],
      filesJSON: [],
      excel: 'src/assets/icons/csv2.gif',
      isVisible: false,
    }
  },

  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 1000)
  },

  methods: {
    onChange() {
      this.files = Array.from(this.$refs.file.files);

      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]
        const reader = new FileReader()
        reader.onload = (e) => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'binary' })
          const worksheet = workbook.Sheets[workbook.SheetNames[0]]
          const json = XLSX.utils.sheet_to_json(worksheet)

          // objeto de mapeamento de nomes de chave original para o novo nome de chave
          const keyMap = {
            'Boletim de serviço': 'bulletin_service',
            Status: 'Status'
          }

          const header = Object.keys(json[0]) // obter as chaves do primeiro objeto como o cabeçalho
          const newData = []
          json.forEach((row, index) => {
            const newRow = {}
            header.forEach((key) => {
              newRow[keyMap[key] || key] = row[key]
            })
            newData.push(newRow)
          })
          this.filesJSON.push(newData)
        }
        reader.readAsBinaryString(file)
      }
    },

    dragover(e) {
      e.preventDefault()
      this.isDragging = true
    },

    dragleave() {
      this.isDragging = false
    },

    drop(e) {
      e.preventDefault();
      this.files = Array.from(e.dataTransfer.files);
      this.onChange(); 
      this.isDragging = false;
    },

    remove(index) {
      if (Array.isArray(this.files)) {
        this.files.splice(index, 1);
      } else {
        console.error('this.files is not an array:', this.files);
      }
    },

    sendData() {
      if (this.files.length > 0) {
        this.filesJSON.forEach((data) => {
          const jsonData = JSON.stringify(data)

          console.log(jsonData)

          // enviar arquivos para o servidor
          axios.post('http://localhost:8080/register/bulletin', jsonData, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        })

        // resetar o valor do input
        this.$refs.file.value = null
        this.files = []
        this.filesJSON = []

        alert('Dados enviados com sucesso!')
      }
    },

  },

}
</script>

<style>
@import '../assets/css/base.css';

.main {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.dropzone-container {
  padding: 7rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(136, 229, 112, 0.5);
  border-radius: 10px;
  box-shadow: 5px 5px 40px 20px #C0C0C0;
}

.dropzone-container:hover {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(136, 229, 112, 1);
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.file-label {
  display: block;
  cursor: pointer;
}

.file-label-text {
  color: rgba(0, 0, 128, 0.6);
  font-weight: 400;
  font-size: 3vmin;
}

.preview-container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2rem;
  margin-top: 3rem;
}

.preview-card {
  display: flex;
  position: relative;
  border: 1px solid rgba(0, 0, 128, 0.7);
  border-radius: 10px;
  background-color: rgba(0, 0, 128, 0.5);
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 5%;
  box-shadow: 3px 3px #e0e0e1;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
}

.preview-card p {
  font-weight: 200;
  color: rgba(225, 225, 225, 0.8);
  text-align: center;
}

.preview-card:hover {
  background-color: rgba(0, 0, 128, 0.7);
}

.preview-card:hover p {
  color: rgba(225, 225, 225, 1);
}

.preview-img {
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  object-fit: cover;
  background-color: transparent;
}

.submit {
  background-color: rgba(0, 0, 128, 0.5);
  color: rgba(225, 225, 225, 0.8);
  font-size: 4vmin;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 25vmin;
  height: 7vmin;
  transition: all 1s;
  margin-top: 3rem;
  box-shadow: 2px 2px 20px 10px #C0C0C0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 53%;
}

.submit svg {
  width: 5.3vmin;
  height: 5vmin;
  fill: rgba(225, 225, 225, 0.8);
  transition: all 1s;
}

.submit:hover {
  color: rgba(225, 225, 225, 1);
  background-color: rgba(0, 0, 128, 0.7);
  transition: all 1s;
}

.submit:hover svg {
  fill: rgba(225, 225, 225, 1);
  transition: all 1s;
}

.ml-2 {
  background-color: transparent;
  border: none;
}

.ml-2 b {
  cursor: pointer;
  font-size: 3.5vmin;
  position: absolute;
  right: 5%;
  top: 3%;
  color: rgba(255, 0, 0, 0.6);
}

.ml-2 b:hover {
  color: rgba(255, 0, 0, 1);
}

/* --------------- Media Queries -------------------- */

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .main {
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-bottom: 80px;
  }

  .dropzone-container {
    padding: 4rem;
    box-shadow: 2px 2px 20px 10px var(--silver);
    margin-right: 40px;
    margin-left: 40px;
  }

  .hidden-input {
    width: 1px;
    height: 1px;
  }

  .file-label {
    font-size: 20px;
  }

  .file-label-text {
    font-size: 25px;
  }

  .preview-container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    margin-top: 2rem;
  }

  .preview-card {
    padding: 5px;
    margin-left: 5px;
    box-shadow: 2px 2px var(--silver);
  }

  .preview-card p {
  }

  .preview-img {
    width: 50px;
    height: 50px;
  }

  .submit {
    font-size: 14pt;
    width: 100px;
    height: 40px;
    margin-top: 25px;
    box-shadow: 2px 2px 20px 10px var(--silver);
  }

  .ml-2 b {
    font-size: 20px;
  }
}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {
  .main {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 40px;
    margin-bottom: 50px;
    width: 95%;
    padding-bottom: 80px;
  }

  .dropzone-container {
    padding: 1rem;
    box-shadow: 2px 2px 50px 5px var(--silver);
    margin-right: 10px;
    margin-left: 10px;
  }

  .hidden-input {
    width: 1px;
    height: 1px;
  }

  .file-label {
    font-size: 20px;
  }

  .file-label-text {
    font-size: 18px;
  }

  .preview-container {
    display: grid;
    grid-template-columns: 47% 47%;
    grid-gap: 10px;
    margin-top: 2rem;
  }

  .preview-card {
    padding: 5px;
    margin-left: 5px;
    box-shadow: 2px 2px var(--silver);
  }

  .preview-card p {
  }

  .preview-img {
    width: 40px;
    height: 40px;
  }

  .submit {
    font-size: 12pt;
    width: 90px;
    height: 40px;
    margin-top: 25px;
    box-shadow: 2px 2px 20px 10px var(--silver);
  }

  .ml-2 b {
    font-size: 20px;
  }
}
</style>
