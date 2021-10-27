import React from "react";
import {useEffect, useState} from 'react';
import {ADD_ITEM} from './redux/actions/types';
import axios from 'axios';
import './App.css';
import {useSelector, useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    let [countries, setCountries] = useState([]);
    let [loading, setLoading] = useState(true);
    let [country, setCountry] = useState('');
    let [president, setPresident] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all').then(
            response => {
                setCountries(response.data);
                setLoading(false);
            }
        );
    }, []);

    const data = useSelector(state => state.countries)

    const clicked = () => {
        dispatch({type: ADD_ITEM, payload: {country, president}})
        setPresident('')
    }

    if (loading) {
        return (<div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>)
    } else {
        return (
            <div className="container">
                <div><h3>Country Test</h3></div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <label htmlFor="countries" className="form-label">Country</label>
                        <select id="countries" className="form-select" value={country} onChange={e => setCountry(e.target.value)}>
                            {countries.map((e, i) => {
                                return (<option key={i} value={e.name}>{e.name}</option>)
                            })}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="president" className="form-label">President</label>
                        <input name="president" className="form-control" value={president} onChange={e => setPresident(e.target.value)}/>
                    </div>
                    <div className="col">
                        <button className="btn btn-sm btn-primary form-control" onClick={clicked}>Post</button>
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
                    {data.map((e,i) => {
                        return (<tr key={i}>
                            <td>{i + 1}</td>
                            <td>{e.country}</td>
                            <td>{e.president}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default App;
