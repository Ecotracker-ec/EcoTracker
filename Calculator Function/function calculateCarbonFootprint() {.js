function calculateCarbonFootprint(inputs) {
  const { electricity, gas, gasusage, wood, priv, waste, meal, meals } = req.body;

  let electricityEmission = electricity * 0.82;

  let gasEmission = 0;
  if (gas === "gas-pipeline") {
    gasEmission = gasusage * 22.73;
  } else if (gas === "gas-cylinder") {
    gasEmission = gasusage * 100;
  }
  
  let woodEmission = wood * 1.6 * 4;

  let travelEmission = priv / 36.6;
  
  let wasteEmission = waste * 1.49 * 4;

  let mealEmission = 0;
  if (meal === "vegetarian") {
    mealEmission = meals * 1.75 * 30;
  } else if (meal === "non-vegetarian") {
    mealEmission = meals * 3.5 * 30;
  }

  // Total carbon footprint
  const totalFootprint = electricityEmission + gasEmission + woodEmission + travelEmission + wasteEmission + mealEmission;

  return totalFootprint;
}
