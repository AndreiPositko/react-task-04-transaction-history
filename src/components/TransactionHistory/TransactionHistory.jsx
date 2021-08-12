import React from 'react';

import TransactionItem from '../TransactionItem';

import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ transactions }) => {
    return (
        <div className={styles.container}>
            <table className={styles.transactions}>
                <thead className={ styles.header }>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                     {transactions.map(item => (
                        <TransactionItem key={ item.id } {...item}/>
                    ))}
                </tbody>
            </table>
           
        </div>
    )
}

export default TransactionHistory;
