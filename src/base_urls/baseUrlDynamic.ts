import axios from 'axios'

// Determinando o baseURL dinamicamente
const checkLocalBackend = async () => {
  try {
    const response = await fetch('http://localhost:3000/alerts');
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const getBaseUrl = async () => {
  const isLocalBackendAvailable = await checkLocalBackend();
  if (isLocalBackendAvailable) {
    return 'http://localhost:3000';
  } else {
    return 'https://billing-ingestion-production.up.railway.app'; 
  }
};

getBaseUrl().then(baseUrl => {
  console.log('Base URL:', baseUrl);
});


// Definindo a URL base para as requisições
const tecsusAPI = axios.create({
  baseURL: await getBaseUrl(),
  withCredentials: false, 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default tecsusAPI
export { getBaseUrl }
