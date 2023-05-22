import React from 'react';
import { Link } from 'react-router-dom';

const Charts = () => {
    return(
        <>
        <Link to="/home">
            <button className="btn btn-success mx-2">
                Back
            </button>
        </Link>
        <center>
        <div>this is chart button</div>
        </center>
        </>
    );
};

export default Charts;

