//TV type namen importeren
import inventory from "../assets/inventory.js";

//1a, Map gebruiken om de tv-type namen van de objecten in een nieuwe array te plaatsen
export const televisionTypes = inventory.map((television) => {
    return television.type;
})

//1b, Filter gebruiken om de uitverkochte tv's in een nieuwe array te plaatsen
export const soldOutTelevisions = inventory.filter((television) => {
    if (television.originalStock - television.sold === 0) {
        return television;
    }
})

//1c, Filter gebruiken om de tv's met AmbiLight in een nieuwe array te plaatsen
export const ambiLightTelevisions = inventory.filter((television) => {
    if (television.options.ambiLight === true) {
        return television;
    }
})

//1d, Sort methode gebruiken om de televisies te rangschikken op prijs van laag-hoog
export const sortLowestPrice = inventory.sort((a, b) => {

    if (a.price > b.price) {
        return 1;
    }

    if (a.price <  b.price) {
        return -1;
    }

    return 0;
})