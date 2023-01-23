import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr className={css.transactionInfo} key={transaction.id}>
            <td className={css.type}>{transaction.type}</td>
            <td className={css.amount}>{transaction.amount}</td>
            <td className={css.currency}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
