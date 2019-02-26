const repeatString = function() {
    let i = 0;
    let n = 3;
    let initialString = 'hey';
    let newString = '';

    while (i < n){
        newString += initialString;
        ++i;
    }
    return newString
}

module.exports = repeatString
