
import axios from 'axios';
import React,{useEffect, useState} from 'react';
export default function Range6() {

  useEffect(() => {
    fetchrange6(100000);
  },[]);

  const[data,setData] = useState([]);

  const fetchrange6 = (start,end) => {
    axios.get(`http://localhost:8080/election/constrange/${start}`).then((respon) => {
      const response = respon.data;
      setData(response);
    } )
  }
  const range6Style = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const range6HeaderStyle = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  };

  const range6CellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    
    <div>
      <center>
        <h1>Constituency won with margin Range 100000 And Above</h1>
        <range6 style={range6Style}>
        <thead>
          <tr>
            <th style={range6HeaderStyle}>Sno</th>
            <th style={range6HeaderStyle}>Constituency Key</th>
            <th style={range6HeaderStyle}>Constituency Name</th>
            <th style={range6HeaderStyle}>Candidate Name</th>
            <th style={range6HeaderStyle}>Party </th>
            <th style={range6HeaderStyle}>Total Votes</th>
            <th style={range6HeaderStyle}>Margin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={range6CellStyle}>{index+1}</td>
              <td style={range6CellStyle}>{data.constkey}</td>
              <td style={range6CellStyle}>{data.constname}</td>
              <td style={range6CellStyle}>{data.cname}</td>
              <td style={range6CellStyle}>{data.pname}</td>
              <td style={range6CellStyle}>{data.totvotes}</td>
              <td style={range6CellStyle}>{data.difference}</td>
            </tr>
          ))}
        </tbody>
      </range6>
        </center>
        </div>
  )
}
