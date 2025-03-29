// Function to calculate the total cost of petrol
function calculateTotalCost() {
    // Get the values from the input fields
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value); // Cost per liter
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value); // Liters purchased

    // Calculate the total cost
    const totalCost = costPerLiter * litersPurchased;

    // Display the total cost in the paragraph
    document.getElementById('totalCost').innerText = `Total Cost: ₹${totalCost.toFixed(2)}`;
}

// Add event listener to the button
document.getElementById('calculateButton').addEventListener('click', calculateTotalCost);