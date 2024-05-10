import React , {useState , useEffect} from 'react'
import Header from './Header'
import "../styles/Header.css"
import CountryService from '../services/CountryService';

export default function Countries() {

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const countryService = new CountryService();

  useEffect(() => {
    const fetchCountries = async () => {
        try {
            const countriesData = await countryService.getCountries(); // Example method to fetch countries
            setCountries(countriesData);
        } catch (error) {
            setError(error.message);
        }
    };

    fetchCountries();

    // Clean up function
    return () => {
        // Perform any cleanup if needed
    };
}, []);

  return (
    <div>
      <Header />
      <div className='page-content'>
          {error && <p>Error: {error}</p>}
          <ul>
              {countries.map(country => (
                  <li key={country.id}>{country.name}</li>
              ))}
          </ul>
      </div>
    </div>
  )
}
