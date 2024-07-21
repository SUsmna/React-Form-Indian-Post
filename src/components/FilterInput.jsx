import React from 'react';

const FilterInput = ({ filter, setFilter }) => {
  return (
    

    <input 
      className='display-postal-data'
      type="text" 
      value={filter} 
      onChange={e => setFilter(e.target.value)} 
      placeholder="Filter by post office name"
    />
  );
};

export default FilterInput;