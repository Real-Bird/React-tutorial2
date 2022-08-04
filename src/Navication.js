import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav style={{ marginBottom: 20 }}>
    <Link
      to="/"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Home
    </Link>
    <Link
      to="/context"
      style={{
        marginRight: 10,
        textDecoration: "none",
        color: "black",
        background: "wheat",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Context
    </Link>
  </nav>
);

export default Navigation;
