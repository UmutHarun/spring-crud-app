import axios from 'axios';

class CountryService {
  constructor() {
    this.baseUrl = 'http://example.com/api'; // API'nizin temel URL'sini buraya girin
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
}

export default CountryService;