// Generate Coin Change
// Change is inevitable (especially when breaking a
// twenty). Make generateCoinChange(cents).
// Accept a number of American cents, compute
// and print how to represent that amount with
// smallest number of coins. Common American
// coins are pennies (1 cent), nickels (5 cents),
// dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4

// What would you do in front of a register to make change?
// Write the pseudocode!

// Highly suggest trying to make it work for 1 quarter first: can you make 1 quarter (25) in change?

// Second: can you simplify/shorten your code? (Don't erase what you have, work on a copy.)

// Third: add half-dollar (50 cents) and dollar (100
// cents) coins with 40 additional characters or less.





function generateCoinChange(cents){
    var dol = 0;
    var hdol = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    dol = cents%100;
    hdol = dol%50;
    quarters = cents%25;
    dimes = quarters%10;
    nickels = dimes%5;
    pennies = nickels%1;

    console.log("Dollars: " + (cents-dol)/100);
    console.log("Half Dollars: " + (dol-hdol)/50);
    console.log("Quarters: " + (hdol-quarters)/25);
    console.log("Dimes: " + (quarters-dimes)/10);
    console.log("Nickels: " + (dimes-nickels)/5);
    console.log("Pennies: " + (nickels-pennies));

}
generateCoinChange(115);



function generateCoinChange(cents){
    var dol = 0;
    var hdol = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    var arr = [cents, dol, hdol, quarters, dimes, nickels, pennies]
    var tarr = [100, 50, 25, 10, 5, 1]
    var measure = ["Dollars: ", "Half Dollars: ", "Quarters: ", "Dimes: ", "Nickels: ", "Pennies: "] 
    for(var i=0; i<tarr.length; i++){
        arr[i+1] = arr[i]% tarr[i];
        console.log(measure[i] + (arr[i]-arr[i+1])/tarr[i]);
    }
}
generateCoinChange(223)