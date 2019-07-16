import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

  /* props.ingredients is in the following format
     ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
     }

     To convert that object to an array, we can use Object.keys.
     That will give us [salad, bacon, cheese, meat]

     We then loop over each element in that array and return
     a new array depending on the number of ingredients.
     return [...Array(props.ingredients[igKey])]
     Note: We only need this for length and not for content of the array.

    Based on the length of each internal array, we create a
    BurgerIngredient with the current key.
   */

  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      })
    })
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
