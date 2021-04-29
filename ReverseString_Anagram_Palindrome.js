
// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD


function acronyms(strname){
    var stringArr= strname.split(" ")
    var newString =""
    for(var i = 0; i < stringArr.length; i++){
        newString += stringArr[i][0]
    }
    return newString
}
console.log(acronyms("Live From Saturday Night Live"));

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE: RETURN A NEW STRING
function stringReverse(string){
    var newString = ""
    for(var i=string.length-1; i >= 0; i--){
        newString += string[i];
    }
    return newString;

}
console.log(stringReverse("HELLO"))
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
function parensValid(string){
    var counter = 0
    for (var i=0; i < string.length; i++){
        if(string[i] === "("){
            counter++;
        }
        if(string[i] === ")"){
            counter--;
        }
        if(counter<0){
            return false;
        }
    if(counter ==! 0){
        return false;
    }
    else{
        return true;
    }
    }
}
console.log(parensValid("())(()"));

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

    function bracesValid(string){
        var counter = 0
        for (var i=0; i < string.length; i++){
            if(string[i] === "("){
                counter++;
            }
            if(string[i] === ")"){
                counter--;
            }
            if(string[i] === "{"){
                counter++;
            }
            if(string[i] === "}"){
                counter--;
            }
            if(string[i] === "["){
                counter++;
            }
            if(string[i] === "]"){
                counter--;
            }
            if(counter<0){
                return false;
            }
        }
        if(counter ==! 0){
            return false;
        }
        else{
            return true;
        }
        
    }
    console.log(bracesValid("({})[]"));


// USING STACK IMPLEMENATION
function bracesValid(string){
    var braceStack = []
    var checker = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    for(var char of string){
        if(char == "(" || char == "{" || char =="["){
            braceStack.push(char)
        }
        else{
            if(checker[braceStack[braceStack.length -1]] == char){
                braceStack.pop()
            }
            else{
                return false
            }
        }
    }
}
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
function isPalindrome(string){
    var count = 0;
    for(var i=0; i < string.length / 2; i++){
        if(string[i] != string[string.length-1-i]){
            return false
        };
    };
    return true;
}
console.log(isPalindrome("KAYAK"))
// start outsides and check each value equal to eachother going in
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2){
    if(string1.length != string2.length){
        return false
    };
    var dict = {}
    for(var i=0; i < string1.length; i++){
        if( string1[i] in dict){
            dict[string1[i]] += 1;
        }
        else{
            dict[string1[i]] = 1;
        }
    }
    for (var i=0; i < string2.length; i++){
        if (string2[i] in dict){
            dict[string2[i]] -= 1;
            if(dict[string2[i]] < 0){
                return false;
            };
        }
        else{
            return false
        };
    };
    return true
}
console.log(isAnagram("LISTEN", "SILENT"))
// HINT: YOU WANT TO USE A DICTIONARY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR
function bookIndex(array){
    var newarr = [];
    for(var i=0; i < array.length; i++){
        if(array[i] == array[i-1] + 1){
            console.log("yes")
        }
        else{
            newarr.push(array[i].toString());
        };
    };
    return newarr;
}
console.log(bookIndex([1,13,14,15,16,17,36,37,38,70]))

// PROFESSOR SOLUTION:

function bookIndex(arr){
    var newarr = []
    for(var i = 0; i < arr.length; i++){
        if((arr[i+1] - arr[i]) == 1){
            var dash = ""
            dash += arr[i]
            while((arr[i+1] - arr[i]) == 1){
                i++
            }
            dash += "-"
            dash += arr[i]
            newarr.push(dash)
        }
        else{
            newarr.push(arr[i].toString())
        }
    }
    return newarr
}
console.log(bookIndex([1,13,14,15,16,17,36,37,38,70]))
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

function join(arr, seperator){

}
// Given an arr and a separator string, output a string of every item in the array separated by the separator.
// EX. [1,2,3] , ", " => "1, 2, 3"
// EX. [1,2,3] , "-" => "1-2-3"
// EX. [1] , "-" => "1"
// EX. [], "," => ""

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//




// FRI
var ob = {
    'A' : "ONE",
    'B' : "TWO",
    'C' : "THREE"
}
function invertObj(obj){
    for(var [key, value] of Object.entries(obj)){
        invertObj[value] = key
    }
    return invertObj
}
console.log(invertObj(ob))
// GIVEN AN OBJECT WITH KEY VALUE PAIRS, RETURN A DICTIONARY WITH THE KEYS AND VALUE SWAPPED
// EX.
// {
//     'A':"ONE",
//     'B':"TWO",
//     'C':"THREE"
// }
// {
//     "ONE":'A',
//     "TWO":'B',
//     "THREE":'C'
// }
function minCoinChange(num){
    var obj = {}

    obj['quarters'] = Math.floor(num/25) // calulates how many quarters goes into num
    num = num% 25

    obj['dimes'] = Math.floor(num/10) // calulates how many quarters goes into num
    num = num% 10

    obj['nickels'] = Math.floor(num/5) // calulates how many quarters goes into num
    num = num% 5

    obj['pennies'] = num
return obj
}
console.log(minCoinChange(79))
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':3
// }