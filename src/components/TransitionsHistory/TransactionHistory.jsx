import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    // console.log(data);

    return (
        <table className={css.transaction}>
            <thead className={css.table}>
                <tr className={css.header}>
                    <th className={css.headerItem}>Type</th>
                    <th className={css.headerItem}>Amount</th>
                    <th className={css.headerItem}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableBody}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={css.tableData} key={id}>
                        <td className={css.tableItem}>{type}</td>
                        <td className={css.tableItem}>{amount}</td>
                        <td className={css.tableItem}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    })),
};