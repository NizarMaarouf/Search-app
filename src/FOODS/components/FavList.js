import React from 'react'
// import Recipe from "../components/Recipe"
// import { v4 as uuidv4 } from "uuid";



function FavList(){

let data = localStorage.getItem('recepies') || [];
 if (data.length){
   data = JSON.parse(data);
 }
console.log(data);
    return (
      <div>
        Fac
{/* {data !== [] && data.map(recipe =>
         <Recipe  key={uuidv4()} recepies={recipe} />)} */}
      </div>
    )
  }


export default FavList;
