import React, {useEffect, useState} from 'react';
import Table from '../components/Table';
import Form from '../components/Form';
import {useSelector} from 'react-redux';
import axios from 'axios';

const Home = () => {
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

  const data = useSelector(state => state.countries)
  if (loading) {
    return (<div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>)
  } else {
    return (
      <div>
        <Form countries={countries}/>
        <Table data={data}/>
      </div>
    )
  }
}

export default Home;
