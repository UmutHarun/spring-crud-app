import React , {useState , useEffect} from 'react'
import Header from './Header'
import "../styles/Header.css"
import CountryService from '../services/CountryService';
import { useNavigate } from 'react-router-dom';
// import "../styles/bootstrap/bootstrap.css"

export default function Countries() {
  const navigate = useNavigate();
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
  }, [countries]);

  const tableStyle = {
    border: '2px solid black', 
    borderCollapse: 'collapse', 
    captionSide: "bottom",
  };

  function addCountryPushHandler(){
    navigate("/add-country");
  }

  function editCountryPushHandler(id){
    navigate(`/edit-country/${id}`);
  }

  function deleteCountryPushHandler(id){
    let countryService = new CountryService();
    countryService.deleteCountry(id);
  }

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
                    <div style={{display:'flex'}}>
                      <button className='btn btn-success' onClick={() => editCountryPushHandler(country["id"])}>Edit</button>
                      <button className='btn btn-danger' onClick={() => deleteCountryPushHandler(country["id"])}>Delete</button>
                    </div>
                  </tr>
              ))}
            </tbody>
          </table>
          <button className='btn btn-success' onClick={addCountryPushHandler}>Add Country</button>
      </div>
    </div>
  )
}
