// api.js
import axios from 'axios';

const API_KEY = 'b7f09be8a382898235a1bcb54fd10dcc'; 
const API_URL = `http://apilayer.net/api/`;

export const fetchExchangeRates = async (currencies,changeCurrency,format) => {
  try {
    const response = await axios.get(`${API_URL}live?access_key=${API_KEY}&currencies=${changeCurrency}&source=${currencies}&format=${format}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
