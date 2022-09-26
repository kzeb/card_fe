import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from "./app/Navbar";

import { TransactionsList } from "./features/transactions/TransactionsList";
import { AddTransactionForm } from "./features/transactions/AddTransactionForm";
import { SingleTransactionPage } from "./features/transactions/SingleTransactionPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddTransactionForm />
                <TransactionsList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/transactions/:transactionNumber"
            component={SingleTransactionPage}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
