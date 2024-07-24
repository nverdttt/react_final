import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import InstrumentList from './components/InstrumentList';
import InstrumentForm from './components/InstrumentForm';
import InstrumentDetail from './components/InstrumentDetail';
import { getInstrumentsFromLocalStorage } from './services/instrumentService';

function App() {
  const instruments = getInstrumentsFromLocalStorage();

  const addInstrument = (newInstrument) => {

  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <InstrumentList />
          </Route>
          <Route path="/add">
            <InstrumentForm addInstrument={addInstrument} />
          </Route>
          <Route path="/instrument/:id">
            <InstrumentDetail instruments={instruments} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;