import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/home" className="home">
        HOME
      </Link>

      <Link to="/hobbies" className="interests">
        INTERESTS
      </Link>
    </div>
  );
}
