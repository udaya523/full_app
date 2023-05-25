
import axios from 'axios';
import React,{useEffect, useState} from 'react';
export default function Range3() {

  useEffect(() => {
    fetchrange3(1000,10000);
  },[]);

  const[data,setData] = useState([]);

  const fetchrange3 = (start,end) => {
    axios.get(`http://localhost:8080/election/constrange/${start}/${end}`).then((respon) => {
      const response = respon.data;
      setData(response);
    } )
  }
  const range3Style = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const range3HeaderStyle = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  };

  const range3CellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    
    <div>
      <center>
        <h1>Constituency won with margin Range 1000-10000</h1>
        <range3 style={range3Style}>
        <thead>
          <tr>
            <th style={range3HeaderStyle}>Sno</th>
            <th style={range3HeaderStyle}>Constituency Key</th>
            <th style={range3HeaderStyle}>Constituency Name</th>
            <th style={range3HeaderStyle}>Candidate Name</th>
            <th style={range3HeaderStyle}>Party Name</th>
            <th style={range3HeaderStyle}>Total Votes</th>
            <th style={range3HeaderStyle}>Margin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={range3CellStyle}>{index+1}</td>
              <td style={range3CellStyle}>{data.constkey}</td>
              <td style={range3CellStyle}>{data.constname}</td>
              <td style={range3CellStyle}>{data.cname}</td>
              <td style={range3CellStyle}>{data.pname}</td>
              <td style={range3CellStyle}>{data.totvotes}</td>
              <td style={range3CellStyle}>{data.difference}</td>
            </tr>
          ))}
        </tbody>
      </range3>
        </center>
        </div>
  )
}
