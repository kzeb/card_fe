import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Simple transaction data app</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Transactions</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
