import React from "react";
import { useSelector } from "react-redux";
import { TimeAgo } from "./TimeAgo";
import { selectTransactionByTransactionNumber } from "./transactionsSlice";

export const SingleTransactionPage = ({ match }) => {
  const { transactionNumber } = match.params;

  const transaction = useSelector((state) =>
    selectTransactionByTransactionNumber(state, transactionNumber)
  );

  if (!transaction) {
    return (
      <section>
        <h2>Transaction not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="transaction">
        <h2>Transaction</h2>
        <TimeAgo timestamp={transaction.date} />
        <p>Date: {new Date(transaction.date).toLocaleString()}</p>
        <p>Transaction Number: {transaction.transactionNumber}</p>
        <p>Card Number: {transaction.cardNumber}</p>
        <p>Account Owner: {transaction.accountName}</p>
        <p>Account Number: {transaction.accountNumber}</p>
        <p>Recipient: {transaction.recipient}</p>
        <p>
          Amount: {transaction.amount} {transaction.currency}
        </p>
      </article>
    </section>
  );
};
