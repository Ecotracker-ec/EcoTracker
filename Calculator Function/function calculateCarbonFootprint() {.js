function calculateCarbonFootprint(inputs) {
    const { electricity, gas, gasusage, wood, priv, waste, meal, meals, renewable, renewunit } = inputs;

    let adjustedElectricity = electricity;
    if (renewable === "yes") {
        adjustedElectricity -= renewunit;
    }
    const electricityEmission = adjustedElectricity * 0.82;

    let gasEmission = 0;
    if (gas === "gas-pipeline") {
        gasEmission = gasusage * 22.73;
    } else if (gas === "gas-cylinder") {
        gasEmission = gasusage * 100;
    }

    const woodEmission = wood * 1.6 * 4;

    const travelEmission = priv / 36.6;

    const wasteEmission = waste * 1.49 * 4;

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
