/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../src/App.css";
import Home from "../src/FOODS/pages/Home";
import Default from "../src/FOODS/pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/NAVBAR/Navbar";
import Food from "./FOODS/pages/Food"
// import Restaurant from "./RESTURANTS/pages/Restaurant"

const App =()=> {
  const [data, setData] = useState()
 const handleFav=(fav)=>{
    setData(fav);
  }

    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/food" exact ><Food /></Route>
             {/* <Route path="/restaurant" exact component={Restaurant} /> */}
              {/* <Route path="/plants" exact component={Plant} />
               <Route path="/cloths" exact component={Cloth} /> */}
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );

}

export default App;
