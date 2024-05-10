import React , {useState , useEffect} from 'react'
import Header from './Header'
import "../styles/Header.css"
import CountryService from '../services/CountryService';
// import "../styles/bootstrap/bootstrap.css"

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

  const tableStyle = {
    border: '2px solid black', 
    borderCollapse: 'collapse', 
    captionSide: "bottom",
  };

  return (
    <div>
      <Header />
      <div className='page-content'>
          {error && <p>Error: {error}</p>}
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Code</th>
                <th>Capital</th>
                <th>Continent</th>
                <th>Description</th>
                <th>Nationality</th>
              </tr>
            </thead>
            <tbody>
              {countries.map(country => (
                  <tr>
                    <td>{country["id"]}</td>
                    <td>{country["name"]}</td>
                    <td>{country["code"]}</td>
                    <td>{country["capital"]}</td>
                    <td>{country["continent"]}</td>
                    <td>{country["description"]}</td>
                    <td>{country["nationality"]}</td>
                  </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  )
}
