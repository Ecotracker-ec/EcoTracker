function calculateCarbonFootprint() {

  const electricityKWh = parseFloat(document.getElementById("electricity-usage").value); // in kWh
  const gasCylinders = parseInt(document.getElementById("gasCylinders").value);  // number of cylinders
  const hasPipedGas = document.getElementById("pipedGas").checked;
  const pipedGasCubicMeters = parseFloat(document.getElementById("pipedGasCubicMeters").value); // in cubic meters
  const domesticFlights = parseInt(document.getElementById("domesticFlights").value);
  const internationalFlights = parseInt(document.getElementById("internationalFlights").value);
  const localTrainTrips = parseInt(document.getElementById("localTrainTrips").value);
  const mediumTrainTrips = parseInt(document.getElementById("mediumTrainTrips").value);
  const longTrainTrips = parseInt(document.getElementById("longTrainTrips").value);
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

  // Air travel
  let airTravelEmission = domesticFlights * 348.5 + internationalFlights * 532.7;

  // Train Travel
  let trainTravelEmission = localTrainTrips * 1.5 + mediumTrainTrips * 18.3 + longTrainTrips * 41.5;

  // Waste Generated
  let wasteEmission = wasteKg * 1.49; 

  // Meals Carbon Emmission
  let mealEmission = vegetarianMeals * 1.75 + nonVegetarianMeals * 3.5;

  // Calculate total carbon footprint
  const totalFootprint = electricityEmission + gasEmission + airTravelEmission + trainTravelEmission + wasteEmission + mealEmission;

  document.getElementById("totalFootprint").innerHTML = `Your total carbon footprint is: ${totalFootprint.toFixed(2)} kg CO2`;
}