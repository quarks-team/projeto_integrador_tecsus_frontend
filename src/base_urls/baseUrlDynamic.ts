import axios from 'axios'

// Determinando o baseURL dinamicamente
const getBaseUrl = () => {
  if (window.location.hostname === 'billing-ingestion-production.up.railway.app') {
    return 'https://billing-ingestion-production.up.railway.app';
  } else {
    return 'http://localhost:3000';
  }
}


// Definindo a URL base para as requisições
const tecsusAPI = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: false, 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default tecsusAPI
export { getBaseUrl }
