function calculateCarbonFootprint() {

  const electricityKWh = parseFloat(document.getElementById("electricity-usage").value); // in kWh
  const gasCylinders = parseInt(document.getElementById("gasCylinders").value);  // number of cylinders
  const hasPipedGas = document.getElementById("pipedGas").checked;
  const pipedGasCubicMeters = parseFloat(document.getElementById("pipedGasCubicMeters").value); // in cubic meters
  const privateVehicleDistance = parseFloat(document.getElementById("private").value);
  const wasteKg = parseFloat(document.getElementById("wasteKg").value);
  const vegetarianMeals = parseInt(document.getElementById("vegetarianMeals").value);
  const nonVegetarianMeals = parseInt(document.getElementById("nonVegetarianMeals").value);

  // Calculate carbon footprint
  let carbonFootprint = 0;

  // Electricity usage
  let electricityEmission = electricity-usage * 0.82;

  // Gas usage
  let gasEmission;
  if (hasPipedGas) {
    gasEmission = pipedGasCubicMeters * 22.73; 
  } else {
    gasEmission = gasCylinders * 100;  
  }

  // Travel 
  let travelEmission = privateVehicleDistance/36.6;

  // Waste Generated
  let wasteEmission = wasteKg * 1.49; 

  // Meals Carbon Emmission
  let mealEmission = vegetarianMeals * 1.75 + nonVegetarianMeals * 3.5;

  // Calculate total carbon footprint
  const totalFootprint = electricityEmission + gasEmission + travelEmission + wasteEmission + mealEmission;

  document.getElementById("totalFootprint").innerHTML = `Your total carbon footprint is: ${totalFootprint.toFixed(2)} kg CO2`;
}
