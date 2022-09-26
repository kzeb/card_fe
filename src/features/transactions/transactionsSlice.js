import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    transactionNumber: nanoid(),
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    cardNumber: "1111 2222 3333 4444",
    accountName: "John Smith",
    accountNumber: "12 3456 7890 0000 0000 0000 0000",
    recipient: "Netflix.com",
    amount: 43,
    currency: "PLN",
  },
  {
    transactionNumber: nanoid(),
    date: sub(new Date(), { minutes: 59 }).toISOString(),
    cardNumber: "1111 2222 3333 5555",
    accountName: "John Smith",
    accountNumber: "12 3456 7890 0000 0000 0000 1111",
    recipient: "Tesco",
    amount: 30,
    currency: "GBP",
  },
];

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    transactionAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(
        cardNumber,
        accountName,
        accountNumber,
        recipient,
        amount,
        currency
      ) {
        return {
          payload: {
            transactionNumber: nanoid(),
            date: new Date().toISOString(),
            cardNumber: cardNumber,
            accountName: accountName,
            accountNumber: accountNumber,
            recipient: recipient,
            amount: amount,
            currency: currency,
          },
        };
      },
    },
  },
});

export const { transactionAdded } = transactionsSlice.actions;

export default transactionsSlice.reducer;

export const selectTransactionByTransactionNumber = (
  state,
  transactionNumber
) =>
  state.transactions.find(
    (transaction) => transaction.transactionNumber === transactionNumber
  );
