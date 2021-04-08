/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
// import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../components/Recipe";
import Alert from "../components/Alert";
 import FavList from "../components/FavList"
 import {useHistory} from "react-router-dom"



function Food() {
  const {push} =useHistory()
  const [query, setQuery] = useState("");
  // const [recipes, setRecipes] = useState([]);
  // const [alert, setAlert] = useState("");
  // const [savedRec,setSavedRec]= useState([]);

  const [isFavs,setIsFavs] = useState(false);



// const saveRec = async (childData)=>{
//   await setSavedRec([...savedRec,childData])

// }
// console.log(savedRec);
// useEffect(()=>{

//  let store = localStorage.getItem('recepies') || [];
//  if (store.length){
//   //  change data to javascript
//    store = JSON.parse(store);
//  }
//  store.push(savedRec)
//  //change data to json
//  store = JSON.stringify(store)
//  savedRec.length && localStorage.setItem('recepies',store)
// //  console.log(savedRec);
// console.log(store);
// },[savedRec])

//   const getData = async () => {
//     if (query !== "") {
//       const result = await Axios.get(url);
//       //  console.log(result);
//       //Displays a message if an incorrect name was typed
//       if (!result.data.more) {
//         return setAlert("No food with such name");
//       }
//       setRecipes(result.data.hits);
//       setQuery("");
//       setAlert("");
//       //Displays a message if nothing has been typed
//     } else {
//       setAlert("Please enter a name of food");
//     }

//   };

  const onClick = (e) => setQuery(e.target.value);
  const onSubmit = (e) => {e.preventDefault();
    // getData();
  };


  return (
    <>
    <div className="App">
      <div className="header">
        <h4>You need to keep food healthy and please look for a healthy low-fat food recipe</h4>
        <h4> <i className="far fa-smile"></i> Health You can't buy with money <i className="far fa-smile"></i> </h4>
        </div>

      <h1>Restaurants Searching App</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onClick}
          value={query}
          autoComplete="off"
          placeholder="Search Restaurant"
        />
        <input type="submit" value="Search" />
      </form>

      {/* <div className="recipes">
        {recipes !== [] && recipes.map(recipe =>
         <Recipe callbackFunc ={saveRec} key={uuidv4()} recipe={recipe} />)}
      </div> */}

    </div>
    <div className="favlist">
      <button className="btn" onClick={() => {setIsFavs(!isFavs); push('/favlist')}}>Favs</button>
      </div>
      {isFavs && <div className="favlist">

        {/* <FavList /> */}

        </div>}

      </>
  );
}

export default Food;
