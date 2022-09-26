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

  const onCardNumberChanged = (e) => setCardNumber(e.target.value);
  const onAccountNameChanged = (e) => setAccountName(e.target.value);
  const onAccountNumberChanged = (e) => setAccountNumber(e.target.value);
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
          type="text"
          id="amount"
          name="amount"
          placeholder="Enter Amount"
          value={amount}
          onChange={onAmountChanged}
        />
        <label htmlFor="currency">Currency:</label>
        <input
          type="text"
          id="currency"
          name="currency"
          placeholder="Enter Currency"
          value={currency}
          onChange={onCurrencyChanged}
        />
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
