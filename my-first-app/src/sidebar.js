import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="mt-2">
        <h4 className="p-1 border-bottom">Sidebar</h4>
        <div className="list-group mt-2">
          <NavLink
            to="/dashboard"
            className="list-group-item list-group-item-action"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/customers"
            className="list-group-item list-group-item-action"
          >
            Customers
          </NavLink>
          <NavLink
            to="/cart"
            className="list-group-item list-group-item-action"
          >
            Cart
          </NavLink>
        </div>
      </div>
    );
  }
}
