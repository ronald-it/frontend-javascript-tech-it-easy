import inventory from "../assets/inventory.js";

//3a+3b Map om de tv-type namen van de objecten in een nieuwe array te plaatsen
export const televisionBrands = inventory.map((television) => {
    return television.brand;
})
export const brandTelevisionsElement = document.getElementById("listOfBrands")
brandTelevisionsElement.textContent = televisionBrands;