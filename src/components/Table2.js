import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Table2() {
  useEffect(() => {
    fetchTable2();
  },[]);

  const[data,setData] = useState([]);

  const fetchTable2 = () => {
    axios.get('http://localhost:8080/election/highestvotes').then((respon) => {
      const response = respon.data;
      setData(response);
    } )
  }

  const table2Style = {
        borderCollapse: 'collapse',
        width: '100%',
      };
    
      const table2HeaderStyle = {
        border: '1px solid black',
        padding: '8px',
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
      };
    
      const table2CellStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'center',
      };


    return (
      <>
      <br/>
      <Link to="/reports">
          <button className="btn btn-secondary mx-2">
              Back
          </button>
      </Link>
      <br/>
      <br/>
      <div>
          <center>
              <h2>Top-5 Candidates won with highest votes </h2>
          </center>
      </div>
      <br/>
      {/* <button onClick={fetchTable2()}>click here!</button> */}
      <center>
      <table2 style={table2Style}>
        <thead>
          <tr>
            <th style={table2HeaderStyle}>Sno</th>
            <th style={table2HeaderStyle}>Candidate Name</th>
            <th style={table2HeaderStyle}>Party Name</th>
            <th style={table2HeaderStyle}>EVM votes</th>
            <th style={table2HeaderStyle}>Postal Votes</th>
            <th style={table2HeaderStyle}>Total Votes</th>
            <th style={table2HeaderStyle}>Percentage of Votes</th>
            <th style={table2HeaderStyle}>Constituency Name</th>
            <th style={table2HeaderStyle}>Constituency Key</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={table2CellStyle}>{index+1}</td>
              <td style={table2CellStyle}>{data.cname}</td>
              <td style={table2CellStyle}>{data.pname}</td>
              <td style={table2CellStyle}>{data.evmvotes}</td>
              <td style={table2CellStyle}>{data.postalvotes}</td>
              <td style={table2CellStyle}>{data.totvotes}</td>
              <td style={table2CellStyle}>{data.percentofvotes}</td>
              <td style={table2CellStyle}>{data.constname}</td>
              <td style={table2CellStyle}>{data.constkey}</td>
            </tr>
          ))}
        </tbody>
      </table2>
      </ center>
      </>
    );
}