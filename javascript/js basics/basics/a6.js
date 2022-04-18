const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }
 const convertToMorse = (str) => {
    return str.toUpperCase().split("").map(el => {
       return morseCode[el] ? morseCode[el] : el;
    }).join("");
 };
 console.log(convertToMorse('Disaster management'));
 console.log(convertToMorse('hey there!'));