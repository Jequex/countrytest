import React from 'react';
import PropTypes from 'prop-types';

const Table = ({data}) => {
  return (<table className="table">
    <thead>
    <tr>
      <th>
        S/N
      </th>
      <th>
        CountryName
      </th>
      <th>
        President
      </th>
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
  </table>)
}

Table.propTypes = {
  data : PropTypes.array
}

export default Table;
