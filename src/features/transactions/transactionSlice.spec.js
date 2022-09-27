import transactionsReducer, { transactionAdded } from "./transactionsSlice";

describe("Transactions acitons", () => {
  const initialState = [
    {
      transactionNumber: "asdfdsfa",
      date: "dadsda",
      cardNumber: "1111 2222 3333 4444",
      accountName: "John Smith",
      accountNumber: "12 3456 7890 0000 0000 0000 0000",
      recipient: "Netflix.com",
      amount: 43,
      currency: "PLN",
    },
  ];

  it("should return transactionAdded action object with prepared payload", () => {
    expect(
      transactionAdded(
        "1111 2222 3333 4444",
        "John Smith",
        "12 3456 7890 0000 0000 0000 0000",
        "Netflix.com",
        43,
        "PLN"
      ).payload
    ).toEqual({
      transactionNumber: expect.any(String),
      date: expect.any(String),
      cardNumber: "1111 2222 3333 4444",
      accountName: "John Smith",
      accountNumber: "12 3456 7890 0000 0000 0000 0000",
      recipient: "Netflix.com",
      amount: 43,
      currency: "PLN",
    });
  });

  it("should add new transaction", () => {
    const actual = transactionsReducer(
      initialState,
      transactionAdded(
        "1111 2222 3333 5555",
        "John Smith",
        "12 3456 7890 0000 0000 0000 1111",
        "Tesco",
        30,
        "GBP"
      )
    );
    expect(actual).toEqual([
      {
        transactionNumber: expect.any(String),
        date: expect.any(String),
        cardNumber: "1111 2222 3333 4444",
        accountName: "John Smith",
        accountNumber: "12 3456 7890 0000 0000 0000 0000",
        recipient: "Netflix.com",
        amount: 43,
        currency: "PLN",
      },
      {
        transactionNumber: expect.any(String),
        date: expect.any(String),
        cardNumber: "1111 2222 3333 5555",
        accountName: "John Smith",
        accountNumber: "12 3456 7890 0000 0000 0000 1111",
        recipient: "Tesco",
        amount: 30,
        currency: "GBP",
      },
    ]);
  });
});
