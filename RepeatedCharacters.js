function showMostRepeatedChar(str) {
    var max = 0, // variable to store the number of appearances of the max char so far
        maxChar = ""; //string to store to the max char(s) in case of multiple characters
    str.split("").forEach(function (char) {  //splits up the argument's string by letters and performs local function to do with them individually as a argument
        if (str.split(char).length > max) { //checks to see how many items are in the array after splitting it by the letter and comparing it to current Max
            max = str.split(char).length; // hightens Max
            maxChar = char; //Changes maxChar
        }
    });
    return maxChar;
}

string = "BB  BB dgdes w";
console.log(showMostRepeatedChar(string));
//TO DO: Make it so this does not recognize empty spaces as Chars