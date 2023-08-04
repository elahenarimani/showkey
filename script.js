"use strict"
let obj = {
    name: "ali",
    family: "narimani",
    mothersName: "maryam",
    size: {
        height: 185,
        weight: 95
    },
    bestFreind: {
        boy: "mohammad",
        girl: "fateme"
    },
    food: {
        fastFood: "pizza",
        Traditional: "kebab"
    },
}
function showKey(features) {
    for (let key in features) {
        console.log(key);
        if (typeof features[key] == "object") {
            showKey(features[key]);
        }
    }
}
showKey(obj);