import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodsArray = [...foods, newFood]; // create a new array that includes the existing foods and the new food
    setFoods(newFoodsArray); // set the state of the foods array to the new array
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodsArray = [...foods, newFood]; // create a new array that includes the existing foods and the new food
    setFoods(newFoodsArray); // set the state of the foods array to the new array
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));import React, { useState } from "react";
  import { spicyFoods, getNewRandomSpicyFood } from "../data";
  
  function SpicyFoodList() {
    const [foods, setFoods] = useState(spicyFoods);
  
    function handleAddFood() {
      const newFood = getNewRandomSpicyFood();
      const newFoodsArray = [...foods, newFood]; // create a new array that includes the existing foods and the new food
      setFoods(newFoodsArray); // set the state of the foods array to the new array
    }

    <select name="filter">
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>

const [foods, setFoods] = useState(spicyFoods);
const [filterBy, setFilterBy] = useState("All");

const foodsToDisplay = foods.filter((food) => {
  if (filterBy === "All") {
    return true;
  } else {
    return food.cuisine === filterBy;
  }
});
  
    function handleLiClick(id) {
      const newFoodArray = foods.map((food) => {
        if (food.id === id) {
          return {
            ...food,
            heatLevel: food.heatLevel + 1,
          };
        } else {
          return food;
        }
      });
      setFoods(newFoodArray);
    }

    [1, 2, 3].filter((number) => number !== 3);


    const foodList = foodsToDisplay.map((food) => (
      <li key={food.id} onClick={() => handleLiClick(food.id)}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>
    ));
    
    return (
      <div>
        <button onClick={handleAddFood}>Add New Food</button>
        <ul>{foodList}</ul>
      </div>
    );
  }
  
  export default SpicyFoodList;
  

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
