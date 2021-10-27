import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [countries, setCountries] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then(
      response => {
        setCountries(response.data);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return(
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{height: '100vh', width: '100%'}}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
        )
  } else {
  return (
    <div className="container">
      <div><h3>Country Test</h3></div>
      <hr />
      <div>
          <label htmlFor="countries" className="form-label">Country</label>
          <select id="countries" className="form-select">
            {countries.map((e, i) => {
              return (<option key={i}>{e.name}</option>)
            })}
          </select>
          <label htmlFor="president" className="form-label">President</label>
          <input name="president" className="form-control" />
        <br />
        <button type="submit" className="btn btn-sm btn-primary">Post</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>
              S/N
            </td>
            <td>
              CountryName
            </td>
            <td>
              President
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  }

}

export default App;
