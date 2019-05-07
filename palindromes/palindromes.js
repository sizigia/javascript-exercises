const palindromes = function (str) {
    myString = str.toLowerCase().split("").filter(x => x.match(/[a-zA-z]+/g)).join("");
    reverseString = myString.split("").reverse().join("");
    return reverseString == myString;
}

module.exports = palindromes
