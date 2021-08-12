import React from 'react';

import TransactionHistory from './components/TransactionHistory';

import transactions from './mocks/transactions.json';

function App() {
   return <TransactionHistory transactions={transactions} />;
}

export default App;
