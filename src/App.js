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
    return(<div>Loading...</div>)
  } else {
  return (
    <div className="container">
      <div><h3>Country Test</h3></div>
      <hr />
      <div className="row">
        <div className="col">
          <label htmlFor="countries" className="form-label">Country</label>
          <select id="countries" className="form-select">
            {countries.map((e, i) => {
              return (<option key={i}>{e.name}</option>)
            })}
          </select>
        </div>
        <div className="col">
          <label htmlFor="president" className="form-label">President</label>
          <input name="president" className="form-control" />
        </div>
        <div className="col">
          <div></div>
          <button className="btn btn-sm btn-primary form-control">Post</button>
        </div>
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
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  }

}

export default App;
