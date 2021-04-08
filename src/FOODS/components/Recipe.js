/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Details from "../components/Details";



const Recipe = ({ recipe,callbackFunc }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients} = recipe.recipe;


  return (

    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a  href={url}target={"_blank"} > The main web page of the recipe</a>

      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <Details ingredients={ingredients} />}
      <button onClick={() => {callbackFunc(recipe)}}>Save</button>

    </div>

  );
};

export default Recipe;
