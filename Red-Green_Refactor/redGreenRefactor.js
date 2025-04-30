function countVowels(str) {  //function to count the vowels in a string
    if (typeof str !== 'string') {    //returns 0 if if the input is not a string
        return 0;
    } else if (str === "") {  //returns 0 if string is empty
        return 0;
    } else {
        let count = 0;
        for (let i = 0; i < str.toLowerCase().length; i++) {    //iterates over letters in the string to test if they are a vowel
            if (str.toLowerCase()[i] === "a" || 
                str.toLowerCase()[i] === "e" || 
                str.toLowerCase()[i] === "i" || 
                str.toLowerCase()[i] === "o" || 
                str.toLowerCase()[i] === "u") {
                count++;
            }
        }
        return count;  //returns a count of vowels (if the data is a string and not empty)
    }   
}

module.exports = countVowels;  //export module for jest