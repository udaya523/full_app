
import axios from 'axios';
import React,{useEffect, useState} from 'react';
export default function Range5() {

  useEffect(() => {
    fetchrange5(50000,100000);
  },[]);

  const[data,setData] = useState([]);

  const fetchrange5 = (start,end) => {
    axios.get(`http://localhost:8080/election/constrange/${start}/${end}`).then((respon) => {
      const response = respon.data;
      setData(response);
    } )
  }
  const range5Style = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const range5HeaderStyle = {
    border: '1px solid black',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  };

  const range5CellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    
    <div>
      <center>
        <h1>Constituency won with margin Range 50000-100000</h1>
        <range5 style={range5Style}>
        <thead>
          <tr>
            <th style={range5HeaderStyle}>Sno</th>
            <th style={range5HeaderStyle}>Constituency Key</th>
            <th style={range5HeaderStyle}>Constituency Name</th>
            <th style={range5HeaderStyle}>Candidate Name</th>
            <th style={range5HeaderStyle}>Party Name</th>
            <th style={range5HeaderStyle}>Total Votes</th>
            <th style={range5HeaderStyle}>Margin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={range5CellStyle}>{index+1}</td>
              <td style={range5CellStyle}>{data.constkey}</td>
              <td style={range5CellStyle}>{data.constname}</td>
              <td style={range5CellStyle}>{data.cname}</td>
              <td style={range5CellStyle}>{data.pname}</td>
              <td style={range5CellStyle}>{data.totvotes}</td>
              <td style={range5CellStyle}>{data.difference}</td>
            </tr>
          ))}
        </tbody>
      </range5>
        </center>
        </div>
  )
}
