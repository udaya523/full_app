import React from 'react';
import { Link } from 'react-router-dom';
import DrillDownPieChart1 from './DrillDownPieChart1';


const Charts = () => {
    return(
        <>
        <br/>
        <Link to="/home">
            <button className="btn btn-secondary mx-2">
                Back
            </button>
        </Link>
        <center>
            <br/>
        <div className="pie-chart-container">
        <h1 style={{ color: 'black', padding: '10px' }}>Drilling into Election Data: A Visual Breakdown of Pie Charts</h1>
            <DrillDownPieChart1/>
        </div>
        </center>
        </>
    );
};

export default Charts;

