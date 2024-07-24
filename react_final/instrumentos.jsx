import axios from 'axios';

const API_URL = 'http://45.236.130.191/instrumentos.php';


export const getInstrumentsFromAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching instruments from API:', error);
    return [];
  }
};


export const saveInstrumentsToLocalStorage = (instruments) => {
  localStorage.setItem('instruments', JSON.stringify(instruments));
};


export const getInstrumentsFromLocalStorage = () => {
  const instruments = localStorage.getItem('instruments');
  return instruments ? JSON.parse(instruments) : [];
};