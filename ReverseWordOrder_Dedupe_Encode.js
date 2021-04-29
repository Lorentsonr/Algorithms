
/* 
    Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
function reverseWordOrder(string){
    var newString = string.split(' ')
    var temp=0;
    for(var i=0; i < newString.length/2; i++){
        temp = newString[i]
        newString[i] = newString[newString.length-1-i]
        newString[newString.length-1-i] = temp;
    }
    newString.join(" ")
    // newString = newString.toString();
    return newString
}

console.log(reverseWordOrder("THIS IS A TEST"))
// EX. "THIS IS A TEST" => "TEST A IS THIS"

//ALT SOLUTIOn:

function reverseWordOrder(string){
    //SEPARATE THE WORDS WITHIN THE SENTENCE
    var arr = string.split(" ")
    //REVERSE THE ORDER OF THE WORDS
    var returnString = ""
    for(var i = arr.length-1; i >=0; i--){
        returnString += arr[i]
        returnString += " "
    }
    return returnString
}
console.log(reverseWordOrder("THIS IS A TEST"))


//-----------------------------------------------------------------------------------------------------//
// TUE
/* 
String: Dedupe
Remove duplicate characters - (case-sensitive)
Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){
    var obj ={}
    var newString = ""
    for(var i = 0; i < string.length; i++){
        if(newString.includes(string.charAt[i])){
            continue
        }
        else{
            newString.concat(string.charAt[i])
        };
    };
    return newString
}
console.log(dedupeString("aabacecbedd"))

//ALT SOLUTION::
function dedupeString(string){
    var obj = {}
    for(var i=0; i < string.length; i++){
        if(!obj.hasOwnProperty(string[i])){
            obj[string[i]] = 0
        }
    }
    var returnString = ""
    for (var [key, value] of Object.entries(obj)){
        returnString += key
    }
    return returnString
}
console.log(dedupeString("aabacecbedd"));

// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
    var newString = ""
    var arr1 = string.split(' ')
    
    for(var i=0; i > arr1.length; i++){
        var arr2 = arr1[i]
        for(var j = arr2.length; j >0; j--){
            newString += arr2[j]
        };
    };
    return newString
}
console.log(reverseWord("hello world"))


function reverseWord(string){
    var newString = ""
    var arr1 = string.split(' ')
    
    for(var i=0; i > arr1.length; i++){
        console.log(newString)
        var arr2 = arr1[i]
        for(var j = arr2.length; j >0; j--){
            newString += arr2[j]
            console.log(newString)
        };
    };
    return newString
}
console.log(reverseWord("hello world"))


//ALT SOLUTION//
function reverseWord(string){
    var arr = string.split(" ")
    var returnString = ""
    for(var word of arr){
        returnString += word.split("").reverse().join("")
        returnString +=(" ")
    }
    return returnString
}
console.log(reverseWord("hello world"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"










//-----------------------------------------------------------------------------------------------------//
// WED
/* 
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),return the original string.
*/
function encode(string){
    var obj = {}
    for(var i=0; i < string.length; i++){
        if(!obj.hasOwnProperty(string[i])){
            obj[string[i]] = 1
        }
        else{
            obj[string[i]] += 1
        }
    }
    var returnString = ""
    for (var [key, value] of Object.entries(obj)){
        returnString += key
        returnString += value
    }
    return returnString
}
console.log(encode("aaaabbcddd"))


// ALT SOLUTION:
function encode(string){
    var encoded =""
    var currentChar = string[0]
    var charCount = 0
    for(var i=0; i < string.length; i++){
        if(string[i] == currentChar){
            charCount++
        }
        if(string[i] != currentChar || i == string.length-1){
            encoded += currentChar + charCount
            currentChar = string[i]
            charCount = 1
        }
    }
    if (encoded.length < string.length){
        return encoded
    }
    else{
        return string
    }
}
console.log(encode("aaaabbcddd"))
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"







// MY SOLUTION - INCORRECT ????????????????????
function decode(string){
    // key * value
    var obj = {}
    for(var i =0; i < string.length; i+2){
        if(!obj.hasOwnProperty(string[i])){
            obj[string[i]] = string[i+1]
        }
    }
    for (var [key, value] of obj){
        obj[key] * [value]
        console.log(obj)
    }
}
console.log(decode("a3b2c1d3"))


// ALT SOLUTION
function decode(string){
var decoded = ""
    for(var i =0; i < string.length; i++){
        if(isNaN(string[i])){
            var char = string[i]
            i++
            for(var j=0; j < parseInt(string[i]); j++){
                decoded += char
            }
        }
    }
    return decoded
}
console.log(decode("a3b2c1d3"))
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"





//-----------------------------------------------------------------------------------------------------//
// THUR
/* 
String: Rotate String
Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
right by that given integer amount.
*/
//// CLOSE TO WORKING - NEED HELP ////////////////////////
function rotateString(string, n){
    var seperate = string.split("")
    var returnString= ""

    for(var i=0; i< n; i++){
        returnString += seperate[seperate.length -1 -i]
    }
    for(var j=0; j < seperate.length - i; j++){
        returnString += seperate[j]
        }

    return returnString
}
console.log(rotateString("HELLO WORLD", 3))



// ALT SOLUTION 
function rotateString(string, n){
    var begin = ""
    var end = ""
    for (var i =0; i < string.length; i++){
        if( i >= string.length - n){
            end += string[i]
        }
        else{
            begin += string[i]
        }
    }
    return end + begin
}
console.log(rotateString("HELLO WORLD", 3))
// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"









//-----------------------------------------------------------------------------------------------------//
// FRI
/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

function updateInv(newInv, currInv){

}

const newInv = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
/* 
    Output: [
        { name: "Peanut Butter", quantity: 70 },
        { name: "Grain of Rice", quantity: 90001 },
        { name: "Royal Jelly", quantity: 20 },
        ]
*/



/*
    Given a string, return the first non-repeating character
    within string
    // EX. "stress" => "t"
    // EX. "moonmen" => "e"
*/

function firstNonRepeatingChar(string){
    var st_dict = {}
    var returnString = ""
    for (var i=0; i<string.length; i++){
        if(st_dict.hasOwnProperty(string[i])){
            st_dict[string[i]]++
        } 
        else {
            st_dict[string[i]] = 1
        }
    }
    for(var [key, value] of Object.entries(st_dict) ){
        if ( [value] > 1){
            delete st_dict[key]
        }
        else{
            returnString += key
            return returnString
        }
    }
    return "none"
}
console.log(firstNonRepeatingChar("aaafffrrr"))


// ALT SOLUTION //
function firstNonRepeatingChar(string){
    var obj = {}
    for(var i =0; i < string.length; i++){
        if(obj.hasOwnProperty(string[i])){
            obj[string[i]] = {
                "repeat" : true,
                "index" : i
            }
        }
        else{
            obj[string[i]] = {
                "repeat" : false,
                "index" : i
            }
        }
    }
    var lowestIndex = string.length
    var returnChar = ""
    for(var [key, value] of Object.entries(obj)){
        if(value.repeat){
            continue
        }
        else{
            if(value.index < lowestIndex){
                lowestIndex = value.index
                returnChar = key
            }
        }
    }
    return returnChar
}
console.log(firstNonRepeatingChar("stress"))