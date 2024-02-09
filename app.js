// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInYen = (valueInEuro / 1.07) * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromYenToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound = (valueInEuro / 156.5) * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

