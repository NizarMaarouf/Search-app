/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <Header title="Amazing Search App">
        <Link
          to="Food"
          className="search-form-home" >
          Search
        </Link>

      <div className="home">
         <h5 className="cred"> made By : <span> Nizar Maarouf</span></h5>
           <Link className="cred-link" to="/" >
        <a href="https://www.linkedin.com/in/nizar-maarouf/ " target="_blank"> Linkedin
          <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/NizarMaarouf " target="_blank">Github
           <i className="fab fa-github"></i>
           </a>
      </Link>
      </div>
      </Header>
    );
  }
}
