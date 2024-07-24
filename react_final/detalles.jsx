import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { saveInstrumentsToLocalStorage } from '../services/instrumentService';

const InstrumentForm = ({ addInstrument }) => {
  const [name, setName] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInstrument = { id: uuidv4(), name };
    addInstrument(newInstrument);
    saveInstrumentsToLocalStorage(newInstrument);
    history.push('/');
  };

  return (
    <div>
      <h2>Add New Instrument</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Instrument Name" required />
        <button type="submit">Add Instrument</button>
      </form>
    </div>
  );
};

export default InstrumentForm;