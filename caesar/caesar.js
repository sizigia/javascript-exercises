const caesar = function (string, shift) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let aLen = alphabet.length;
    let index = (letter, shift) => {
        let initial = alphabet.indexOf(letter) + shift;
        if (initial >= 0 && initial <= 25) {
            return initial;
        }
        else if (initial < 0) {
            do {
                initial += aLen;
            } while (initial < 0);
            return initial;
        }
        else if (initial > 25) {
            do {
                initial -= aLen;
            } while (initial > 25);
            return initial;
        }
    };

    let replaceLetter = char => {
        if (char.match(/[a-z]/g)) {
            return alphabet[index(char, shift)];
        }
        else if (char.match(/[A-Z]/g)) {
            let lowChar = char.toLowerCase();
            return alphabet[index(lowChar, shift)].toUpperCase();
        }
        else {
            return char;
        }
    };
    return string.split("").map(replaceLetter).join("");
}

module.exports = caesar
