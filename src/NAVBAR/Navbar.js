import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar links">

      <div >
        <ul>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
</li>
          <li className="navbar-item">
            <Link className="nav-link" to="/food">
              FOOD
            </Link>

 </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/plants">
              PLANTS
            </Link>
</li>

          <li className="navbar-item">
            <Link className="nav-link" to="/restaurant">
              RESTAURANTS
            </Link>
 </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/cloth">
              CLOTHS
            </Link>
             </li>

        </ul>
      </div>
    </nav>
  );
}
