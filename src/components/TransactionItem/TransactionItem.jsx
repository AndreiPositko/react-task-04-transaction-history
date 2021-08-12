import React from 'react';

import styles from './TransactionItem.module.css';

const TransactionItem = (props) => {
    const { type, amount, currency } = props;
    return (
        <>
            <tr>
                <td>{ type }</td>
                <td>{ amount }</td>
                <td>{currency }</td>
            </tr>
        </>
    )
}

export default TransactionItem;