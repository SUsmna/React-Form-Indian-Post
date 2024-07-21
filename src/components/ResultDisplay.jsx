import React from 'react';
import FilterInput from './FilterInput';

const ResultsDisplay = ({ data, error, filter, setFilter }) => {
  return (
    
    <div className="results-display">
      {error && <p className="error">{error}</p>}
      {data.length > 0 && (
        <div>
          <p style={{ marginRight:"89%" }}><b>Pincode:{data[0].Pincode}</b> </p>
          <p style={{ marginRight:"75%" }}><b>Message:</b>Number of pincode(s) found: {data.length}</p>
          <FilterInput filter={filter} setFilter={setFilter} />
          <ul>
            {data.map((postOffice, index) => (
              <li key={index}>
                <p><b>Name: </b> {postOffice.Name}</p>
                <p><b>Branch Type: </b> {postOffice.BranchType}</p>
                <p><b>Delivery Status:</b> {postOffice.DeliveryStatus}</p>
                <p><b>District: </b> {postOffice.District}</p>
                <p><b>Division: </b> {postOffice.Division}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.length === 0 && !error }
    </div>
  );
};

export default ResultsDisplay;