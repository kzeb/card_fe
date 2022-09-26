import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { TimeAgo } from "./TimeAgo";

export const TransactionsList = () => {
  const transactions = useSelector((state) => state.transactions);

  const orderedTransactions = transactions
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedTransactions = orderedTransactions.map((transaction) => {
    return (
      <article
        className="transaction-excerpt"
        key={transaction.transactionNumber}
      >
        <h2>
          {transaction.amount} {transaction.currency} to {transaction.recipient}
        </h2>

        <div>
          <TimeAgo timestamp={transaction.date} />
        </div>

        <Link
          to={`/transactions/${transaction.transactionNumber}`}
          className="button"
        >
          View transaction details
        </Link>
      </article>
    );
  });

  return (
    <section className="transactions-list">
      <h2>Transactions</h2>
      {renderedTransactions}
    </section>
  );
};
