//2a, For loop gebruiken om de verkochte tv's per type bij elkaar op te tellen
import inventory from "../assets/inventory.js";

let soldTelevisions = 0;
export const soldAmount = ((arr) => {
    for (let i = 0; i < arr.length; i++) {
        soldTelevisions += arr[i].sold;
    }
    return soldTelevisions;
})

//2b, getElement gebruiken om Javascript te koppelen aan HTML
export const soldTelevisionsElement = document.getElementById("soldTV")
soldTelevisionsElement.textContent = soldAmount(inventory);

//2c, For loop gebruiken om de ingekochte tv's per type bij elkaar op te tellen
let boughtTelevisions = 0;
export const boughtAmount = ((arr) => {
    for (let i = 0; i < arr.length; i++) {
        boughtTelevisions += arr[i].originalStock;
    }
    return boughtTelevisions;
})

//2d, getElement gebruiken om Javascript te koppelen aan HTML
export const boughtTelevisionsElement = document.getElementById("boughtTV")
boughtTelevisionsElement.textContent = boughtAmount(inventory);

//2e, For loop plus getElement gebruiken om Javascript te koppelen aan HTML
let toBeSoldTelevisions = 0;
export const toBeSoldAmount = ((arr) => {
    for (let i = 0; i < arr.length; i++) {
        toBeSoldTelevisions += arr[i].originalStock - arr[i].sold;
    }
    return toBeSoldTelevisions;
})
export const toBeSoldTelevisionsElement = document.getElementById("toBeSoldTV")
toBeSoldTelevisionsElement.textContent = toBeSoldAmount(inventory);