// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  

  function polybius(input, encode = true) {
    const alphabet1 = {
      "a" : 11,
      "b" : 21,
      "c" : 31,
      "d" : 41,
      "e" : 51, 
      "f" : 12,
      "g" : 22,
      "h" : 32,
      "i" : 42,
      "j" : 42,
      "k" : 52,
      "l" : 13,
      "m" : 23,
      "n" : 33,
      "o" : 43,
      "p" : 53,
      "q" : 14,
      "r" : 24,
      "s" : 34,
      "t" : 44,
      "u" : 54,
      "v" : 15,
      "w" : 25,
      "x" : 35,
      "y" : 45,
      "z" : 55,
    };
  
    const alphabet2 = {
      11 : "a",
      21 : "b",
      31 : "c",
      41 : "d",
      51 : "e", 
      12 : "f",
      22 : "g",
      32 : "h",
      42 : "i/j",
      52 : "k",
      13 : "l",
      23 : "m",
      33 : "n",
      43 : "o",
      53 : "p",
      14 : "q",
      24 : "r",
      34 : "s",
      44 : "t",
      54 : "u",
      15 : "v",
      25 : "w",
      35 : "x",
      45 : "y",
      55 : "z",
    };
    input = input.toLowerCase();

    if (encode) {                          // encoding a message
      let encodedMessage = "";

      for (let i = 0; i < input.length; i++) {
        let inputIndex = input[i];
        if (inputIndex === " ") {
          encodedMessage += " ";
        }
        else {
        encodedMessage += [alphabet1[inputIndex]];
        }
        }
        return encodedMessage;
      }; 
      

    if (!encode) {                         // decoding a message
      let decodedMessage = "";

      for (numbers in input) {            // input = '2345 325134112251'
        let takeOutSpaces = input.split(" "); // takeOutSpaces = [ '2345', '325134112251' ]
        
        for (encodedWords in takeOutSpaces) {
          if (takeOutSpaces[encodedWords].length % 2 != 0) { 
            return decodedMessage = false;
          }
        }
        const numberPair = `${input[0]}${input[1]}`;  

        if (input[0] === " ") {
          decodedMessage += input[0];
          input = input.slice(1);
          continue;
        }

        for (values in alphabet2) {
          if (numberPair === values) {
            decodedMessage += alphabet2[values];
          }
        }
        
        input = input.slice(2);
      }

      return decodedMessage;           //'message'

    };
    };
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
