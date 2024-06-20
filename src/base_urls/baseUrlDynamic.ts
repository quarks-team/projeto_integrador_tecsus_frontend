import axios from 'axios';

// Função para determinar a baseURL dinamicamente
const checkLocalBackend = async () => {
  try {
    const response = await fetch('http://localhost:3000/alerts');
    return response.ok;
  } catch (error) {
    return false;
  }
};

const getBaseUrl = async () => {
  const isLocalBackendAvailable = await checkLocalBackend();
  return isLocalBackendAvailable ? 'http://localhost:3000' : 'https://billing-ingestion-production.up.railway.app';
};

// Criar instância do axios com uma baseURL padrão
const tecsusAPI = axios.create({
  baseURL: 'https://billing-ingestion-production.up.railway.app', 
  timeout: 1000,
  withCredentials: false, 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': ['https://billing-ingestion-production.up.railway.app', 'http://localhost:3000']
  }
});

// Atualizar a baseURL de forma assíncrona
getBaseUrl().then(baseUrl => {
  tecsusAPI.defaults.baseURL = baseUrl;
});


export default tecsusAPI;
export { getBaseUrl };
