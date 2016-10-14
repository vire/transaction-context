import React, { Component } from 'react';

import './App.css';
import TransactionDetail from './TransactionDetail';
import { getTransactions } from './services/api';

class App extends Component {

  constructor() {
    super();
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    getTransactions()
      .then(( { transactions }) => this.setState({ transactions: transactions }));
  }

  render() {
    const { transactions } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>IB - Transaction Context</h2>
        </div>
        {transactions && Object.keys(transactions).map(key =>
          <TransactionDetail key={key} transaction={transactions[key]}/>
        )}
      </div>
    );
  }
}

export default App;
