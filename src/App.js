import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import TransactionData from './components/transactionData/transactionData';

function App() {
  return (
    <div className="App container">
      <TransactionData />
    </div>
  );
}

export default App;
