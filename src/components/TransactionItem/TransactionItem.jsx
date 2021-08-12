import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionItem.module.css';

const TransactionItem = (props) => {
    const { type, amount, currency } = props;
    return (
        <>
            <tr className={ styles.itemRow}>
                <td>{ type }</td>
                <td>{ amount }</td>
                <td>{currency }</td>
            </tr>
        </>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem;