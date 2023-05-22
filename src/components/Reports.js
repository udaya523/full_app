import React from "react";
import { Link } from 'react-router-dom';

const Reports = () => {
    return(
        <>
        <Link to="/home">
            <button className="btn btn-success mx-2">
                Back
            </button>
        </Link>
        <center>
         <h2>Reports</h2>
         <div >
            {/* <button className="btn btn-dark" style={{ width: '100%', whiteSpace: 'nowrap' }}>
                Top-5 Candidates won with the highest margin in their Constituency
            </button>
   */}
   <button className="btn btn-dark" style={{ width: '100%', whiteSpace: 'nowrap', backgroundColor: 'pink' }}>
  Top-5 Candidates won with the highest margin in their Constituency
</button>


    
 
            <br/>
            <br/>
            <button className="btn btn-dark" style={{ width: '100%', whiteSpace: 'nowrap' }}>
                Top-5 Candidates with highest votes 
            </button>
            <br/>
            <br/>
            <button className="btn btn-dark" style={{ width: '100%', whiteSpace: 'nowrap' }}>
                Candidate contesting in more than one constituency
            </button>
            <br/>
            <br/>
            <button className="btn btn-dark" style={{ width: '100%', whiteSpace: 'nowrap' }}>
                Top-5 Constituency with highest NOTA votes
            </button>
            <br/>
            <br/>
            <button className="btn btn-dark" style={{ width: '100%', whiteSpace: 'nowrap' }}>
                Constituency won with margin Ranges
            </button>
         </div>
        </center>
        </>
    )
}
export default Reports;
