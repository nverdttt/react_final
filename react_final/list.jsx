
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getInstrumentsFromAPI, getInstrumentsFromLocalStorage, saveInstrumentsToLocalStorage } from '../services/instrumentService';

const InstrumentList = () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    const fetchInstruments = async () => {
      const instrumentsFromAPI = await getInstrumentsFromAPI();
      setInstruments(instrumentsFromAPI);
      saveInstrumentsToLocalStorage(instrumentsFromAPI);
    };
    fetchInstruments();
  }, []);

  const deleteInstrument = (id) => {
    const updatedInstruments = instruments.filter(instr => instr.id !== id);
    setInstruments(updatedInstruments);
    saveInstrumentsToLocalStorage(updatedInstruments);
  };

  return (
    <div>
      <h2>nuevo insturmento</h2>
      <ul>
        {instruments.map(instr => (
          <li key={instr.id}>
            <Link to={`/instrument/${instr.id}`}>{instr.name}</Link>
            <button onClick={() => deleteInstrument(instr.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">nuevo instrumento</Link>
    </div>
  );
};

export default InstrumentList;