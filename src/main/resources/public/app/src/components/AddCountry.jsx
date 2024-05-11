import React, { useState } from 'react'
import "../styles/bootstrap/bootstrap.css"
import CountryService from '../services/CountryService';
import Header from './Header';

export default function AddCountry() {
    const [formData,setFormData] = useState({
        name: "",
        code: "",
        capital: "",
        description: "",
        nationality: "",
        continent: ""
    });

    function changeFormHandler(event){
        const {name,value} = event.target;
        setFormData(prevstate => ({
            ...prevstate,
            [name] : value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        let countryService = new CountryService();
        countryService.addCountry(formData);
    }

  return (
    <div>
        <Header />
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center" style={{height: "70vh"}}>
                <div className="card col-md-6">
                    <h3 className="text-center mt-4">Add Employee</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group py-3">
                            <label className="d-flex justify-content-start"> Name: </label>
                            <input placeholder="Name" name="name" className="form-control" 
                            value={formData.name} onChange={changeFormHandler} />
                        </div>
                        <div className="form-group py-3">
                            <label className="d-flex justify-content-start"> Code: </label>
                            <input placeholder="Code" name="code" className="form-control" 
                            value={formData.code} onChange={changeFormHandler} />
                        </div>
                        <div className="form-group py-3">
                            <label className="d-flex justify-content-start"> Capital: </label>
                            <input placeholder="Capital" name="capital" className="form-control" 
                            value={formData.capital} onChange={changeFormHandler} />
                        </div>
                        <div className="form-group py-3">
                            <label className="d-flex justify-content-start"> Description: </label>
                            <input placeholder="Description" name="description" className="form-control" 
                            value={formData.description} onChange={changeFormHandler} />
                        </div>
                        <div className="form-group py-3">
                            <label className="d-flex justify-content-start"> Nationality: </label>
                            <input placeholder="Nationality" name="nationality" className="form-control" 
                            value={formData.nationality} onChange={changeFormHandler} />
                        </div>
                        <div className="form-group py-3">
                            <label className="d-flex justify-content-start"> Continent: </label>
                            <input placeholder="Continent" name="continent" className="form-control" 
                            value={formData.continent} onChange={changeFormHandler} />
                        </div>
                        <div className="py-3">
                            <button className="btn btn-success mx-1" type='submit'>Save</button>
                            {/* <Link to='/employees' className='btn btn-danger mx-1' onClick={this.saveEmployee}>Save</Link> */}
                            {/* <Link to='/employees' className='btn btn-danger mx-1'>Cancel</Link> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
