import React from 'react';

const InputForm = ({ pincode, setPincode, handleLookup }) => {
  return (
    <div className="input-form">
      <input 
        type="text" 
        value={pincode} 
        onChange={e => setPincode(e.target.value)} 
        placeholder="Enter Pincode"
      /><br /><br />
      <button onClick={handleLookup}>Lookup</button>
    </div>
  );
};

export default InputForm;