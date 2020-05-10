import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Tab() {
  let location = useLocation();
  const getClassName = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="tab">
      <button className="tablinks">
        <Link to="/" className={getClassName("/")}>
          Home
        </Link>
      </button>
      <button className="tablinks">
        <Link to="/my-content" className={getClassName("/my-content")}>
          My Content
        </Link>
      </button>
    </div>
  );
}
