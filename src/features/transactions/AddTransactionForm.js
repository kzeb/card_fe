import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { transactionAdded } from "./transactionsSlice";

export const AddTransactionForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const dispatch = useDispatch();

  const onCardNumberChanged = (e) => {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setCardNumber(e.target.value);
  };
  const onAccountNameChanged = (e) => setAccountName(e.target.value);
  const onAccountNumberChanged = (e) => {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(
        /(.{2})(.{4})(.{4})(.{4})(.{4})(.{4})(.{4})/g,
        "$1 $2 $3 $4 $5 $6 $7"
      )
      .trim();
    setAccountNumber(e.target.value);
  };
  const onRecipientChanged = (e) => setRecipient(e.target.value);
  const onAmountChanged = (e) => setAmount(e.target.value);
  const onCurrencyChanged = (e) => setCurrency(e.target.value);

  const onSaveTransactionClicked = () => {
    if (
      cardNumber &&
      accountName &&
      accountNumber &&
      recipient &&
      amount &&
      currency
    ) {
      dispatch(
        transactionAdded(
          cardNumber,
          accountName,
          accountNumber,
          recipient,
          amount,
          currency
        )
      );
      setCardNumber("");
      setAccountName("");
      setAccountNumber("");
      setRecipient("");
      setAmount("");
      setCurrency("");
    }
  };

  const canSave =
    Boolean(cardNumber) &&
    Boolean(accountName) &&
    Boolean(accountNumber) &&
    Boolean(recipient) &&
    Boolean(amount) &&
    Boolean(currency);

  return (
    <section>
      <h2>Add a New Transaction</h2>
      <form>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          maxLength="19"
          placeholder="Enter Card Number"
          value={cardNumber}
          onChange={onCardNumberChanged}
        />
        <label htmlFor="accountName">Name and Surname:</label>
        <input
          type="text"
          id="accountName"
          name="accountName"
          placeholder="Enter Name and Surname"
          value={accountName}
          onChange={onAccountNameChanged}
        />
        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          name="accountNumber"
          maxLength="31"
          placeholder="Enter Account Number"
          value={accountNumber}
          onChange={onAccountNumberChanged}
        />
        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          placeholder="Enter Recipient"
          value={recipient}
          onChange={onRecipientChanged}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter Amount"
          value={amount}
          onChange={onAmountChanged}
        />
        <label htmlFor="currency">Currency:</label>
        <select id="currency" value={currency} onChange={onCurrencyChanged}>
          <option value="PLN">PLN</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </form>
      <button
        type="button"
        className="button"
        onClick={onSaveTransactionClicked}
        disabled={!canSave}
      >
        Save Transaction
      </button>
    </section>
  );
};
