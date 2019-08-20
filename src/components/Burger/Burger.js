import React from 'react';

import BurgerIngredient from './BurgerIngredient';

import classes from './Burger.css';

const burger = props => {
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

  const uniqueIngredients = Object.keys(props.ingredients); // ["salad", "bacon", "cheese", "meat"]

  let transformedIngredients = uniqueIngredients.map(ingredientKey => {
    const ingredientQuantity = props.ingredients[ingredientKey]; // Get the value of each key.

    const ingredientQuantityAllocation = Array(ingredientQuantity); // Allocates space for an array of length "ingredientQuantity"

    // Destructure the ingredientQuantityAllocation to create an actual array of undefineds.
    const ingredientQuantityArray = [...ingredientQuantityAllocation]; // [undefined] or [undefined, undefined] depending on the value of ingredientQuantityAllocation.

    const newElement = ingredientQuantityArray.map((_, i) => {
      return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
    });

    return newElement;
  });

  // A more concise way to do the same thing as above.
  //const transformedIngredients = Object.keys(props.ingredients)
  //.map(igKey => {
  //return [...Array(props.ingredients[igKey])].map((_, i) => {
  //return <BurgerIngredient key={igKey + i} type={igKey} />;
  //})
  //});

  console.log('transformed? ', transformedIngredients);
  // We now need to check for no ingredients
  const numberOfIngredients = transformedIngredients.reduce(
    (previousValue, currentValue) => {
      console.log('prev', previousValue);
      console.log('next', currentValue);
      return previousValue.concat(currentValue);
    },
    []
  );

  console.log('full? ', numberOfIngredients);
  if (numberOfIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
