const reverseString = function() {
    let inputString = 'hello';
    let inputArray = inputString.split('');
    let revInput = inputArray.reverse().join('').toString();

        return revInput;
}

module.exports = reverseString
