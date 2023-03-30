import React, { useState } from "react";

const NutritionPage = () => {
  const [mealPlan, setMealPlan] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  const handleMealPlanChange = (event) => {
    setMealPlan(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleProteinChange = (event) => {
    setProtein(event.target.value);
  };

  const handleCarbsChange = (event) => {
    setCarbs(event.target.value);
  };

  const handleFatChange = (event) => {
    setFat(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Meal Plan:", mealPlan);
    console.log("Calories:", calories);
    console.log("Protein:", protein);
    console.log("Carbs:", carbs);
    console.log("Fat:", fat);
  };

  return (
    <div>
      <h1>Nutrition</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="meal-plan">Meal Plan</label>
          <select id="meal-plan" value={mealPlan} onChange={handleMealPlanChange}>
            <option value="Keto">Keto</option>
            <option value="Paleo">Paleo</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input type="number" id="calories" value={calories} onChange={handleCaloriesChange} />
        </div>
        <div>
          <label htmlFor="protein">Protein (g)</label>
          <input type="number" id="protein" value={protein} onChange={handleProteinChange} />
        </div>
        <div>
          <label htmlFor="carbs">Carbs (g)</label>
          <input type="number" id="carbs" value={carbs} onChange={handleCarbsChange} />
        </div>
        <div>
          <label htmlFor="fat">Fat (g)</label>
          <input type="number" id="fat" value={fat} onChange={handleFatChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NutritionPage;