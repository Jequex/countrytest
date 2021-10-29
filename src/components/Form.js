import React, {useState} from 'react';
import {ADD_ITEM} from '../redux/actions/types';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

const Form = ({countries}) => {
  const dispatch = useDispatch();

  let [country, setCountry] = useState('');
  let [president, setPresident] = useState('');

  const clicked = () => {
    dispatch({type: ADD_ITEM, payload: {country, president}})
    setPresident('');
    setCountry('');
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <label htmlFor="countries" className="form-label">Country</label>
          <select id="countries" className="form-select" value={country} onChange={e => setCountry(e.target.value)}>
            <option>select country...</option>
            {countries.map((e, i) => {
              return (<option key={i} value={e.name}>{e.name}</option>)
            })}
          </select>
        </div>
        <div className="col">
          <label htmlFor="president" className="form-label">President</label>
          <input name="president" className="form-control" value={president}
                 onChange={e => setPresident(e.target.value)}/>
        </div>
      </div>
      <br />
      <div>
        <button className="btn btn-sm btn-primary form-control" onClick={clicked} disabled={!country || !president}>Post</button>
      </div>
    </div>
  )
}

Form.propTypes = {
  countries: PropTypes.array
}

export default Form;
