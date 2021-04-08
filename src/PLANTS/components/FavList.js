/* eslint-disable no-undef */
import React from 'react'
import Recipe from "../components/Recipe"
import { v4 as uuidv4 } from "uuid";


function FavList(){

 let data = localStorage.getItem('recepies') || [];
 if (data.length){

   data = JSON.parse(data);
 }

    return (
      <div>
        <h1>FavList</h1>
{data !== [] && data.map(recipe =>
         <Recipe  key={uuidv4()} recipe={data} />)}
      </div>
    )
}

export default FavList;
