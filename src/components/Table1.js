import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Table1() {
  useEffect(() => {
    fetchTable1();
  },[]);

  const[data,setData] = useState([]);

  const fetchTable1 = () => {
    axios.get('http://localhost:8080/election/highestmargin').then((respon) => {
      const response = respon.data;
      setData(response);
    } )
  }

  const table1Style = {
        borderCollapse: 'collapse',
        width: '100%',
      };
    
      const table1HeaderStyle = {
        border: '1px solid black',
        padding: '8px',
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
      };
    
      const table1CellStyle = {
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
              <h2>Top-5 Candidates won with the highest margin in their Constituency </h2>
          </center>
      </div>
      <br/>
      <center>
      <table1 style={table1Style}>
        <thead>
          <tr>
            <th style={table1HeaderStyle}>Sno</th>
            <th style={table1HeaderStyle}>Candidate Name</th>
            <th style={table1HeaderStyle}>Constituency Name</th>
            <th style={table1HeaderStyle}>Constituency Key</th>
            <th style={table1HeaderStyle}>Total Votes</th>
            <th style={table1HeaderStyle}>Difference</th>
            {/* <th style={table1HeaderStyle}>Percentage of Votes</th>
            <th style={table1HeaderStyle}>Constituency Name</th>
            <th style={table1HeaderStyle}>Constituency Key</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((data,index) => (
            <tr key={data.sno}>
              <td style={table1CellStyle}>{index+1}</td>
              <td style={table1CellStyle}>{data.cname}</td>
              <td style={table1CellStyle}>{data.constname}</td>
              <td style={table1CellStyle}>{data.constkey}</td>
              <td style={table1CellStyle}>{data.totvotes}</td>
              <td style={table1CellStyle}>{data.difference}</td>
              {/* <td style={table1CellStyle}>{data.percentofvotes}</td>
              <td style={table1CellStyle}>{data.constname}</td>
              <td style={table1CellStyle}>{data.constkey}</td> */}
            </tr>
          ))}
        </tbody>
      </table1>
      </ center>
      </>
    );
}