// ToyCar constructor function
function ToyCar(model, color, material, scale, price, manufacturer, year, dimensions, weight, specialFeatures) {
    this.model = model;
    this.color = color;
    this.material = material;
    this.scale = scale;
    this.price = price;
    this.manufacturer = manufacturer;
    this.year = year;
    this.dimensions = dimensions;
    this.weight = weight;
    this.specialFeatures = specialFeatures;

    // Method to display car details
    this.displayDetails = function() {
        return `
            <h2>${this.model}</h2>
            <p><strong>Color:</strong> ${this.color}</p>
            <p><strong>Material:</strong> ${this.material}</p>
            <p><strong>Scale:</strong> ${this.scale}</p>
            <p><strong>Price:</strong> $${this.price}</p>
            <p><strong>Manufacturer:</strong> ${this.manufacturer}</p>
            <p><strong>Year:</strong> ${this.year}</p>
            <p><strong>Dimensions:</strong> ${this.dimensions}</p>
            <p><strong>Weight:</strong> ${this.weight}</p>
            <p><strong>Special Features:</strong> ${this.specialFeatures.join(", ")}</p>
        `;
    }
}

// Creating an instance of ToyCar
let toyCar1 = new ToyCar(
    "Super Racer", 
    "Red", 
    "Plastic", 
    "1:18", 
    29.99, 
    "ModelToyCars Inc.", 
    2024, 
    "10x5x5 inches", 
    "0.5 kg", 
    ["Lights", "Sound Effects", "Remote Control"]
);

// Function to update the car details on the page
function updateDetails() {
    document.getElementById("carDetails").innerHTML = toyCar1.displayDetails();
}

// Function to change car color and update details
function changeCarColor(newColor) {
    toyCar1.color = newColor;
    updateDetails();
}

// Initial call to display car details on page load
window.onload = updateDetails;
