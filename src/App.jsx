import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultDisplay';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [pincode, setPincode] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  const handleLookup = async () => {
    if (pincode.length !== 6 || isNaN(pincode)) {
      setError('Invalid Pincode');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const result = await response.json();
      if (result[0].Status === "Error") {
        setError('Error fetching data');
      } else {
        setData(result[0].PostOffice);
      }
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const filteredData = data.filter(postOffice => 
    postOffice.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h3>Enter Pincode</h3>
      <InputForm 
        pincode={pincode} 
        setPincode={setPincode} 
        handleLookup={handleLookup} 
      />
      {loading ? (
        <Loader />
      ) : (
        <ResultsDisplay   
          data={filteredData} 
          error={error} 
          filter={filter} 
          setFilter={setFilter} 
        />
      )}
    </div>
  );
}

export default App