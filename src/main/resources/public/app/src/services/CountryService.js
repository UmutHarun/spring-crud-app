import axios from 'axios';

class CountryService {
  constructor() {
    this.baseUrl = 'http://localhost:8092/api'; 
  }

  async getCountries() {
    try {
      const response = await axios.get(`${this.baseUrl}/countries`);
      return response.data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  }

  async addCountry(country){
    try{
      await axios.post(`${this.baseUrl}/add-country`,country);
    } catch (error) {
      console.error('Error fetching countries:', error);
      console.error(error.response.data)
      throw error;
    }
  }

  async getCountry(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/country/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  }

  async editCountry(id,country){
    try{
      // await axios.put(`${this.baseUrl}/edit-country/${id}`,country);
      await axios.put(this.baseUrl + "/edit-country/" + id, country);
    } catch (error) {
      console.error('Error fetching countries:', error);
      console.error(error.response.data)
      throw error;
    }
  }
}

export default CountryService;