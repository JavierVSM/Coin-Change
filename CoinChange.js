function coinChange(num){
    let result= {}; 
    let dollars = num / 100;

    if (dollars >= 1) {
        result.Dollars = Math.trunc (dollars);
        num = num % 100;
    }
    
    let quarters = num / 25;
    if (quarters >= 1) {
        result.Quarters = Math.trunc (quarters);
        num = num % 25;
    }

    let dimes = num / 10;
    if (dimes >= 1) {
        result.Dimes = Math.trunc (dimes);
        num = num % 10;
    }
    
    let nickels = num / 5;
    if (nickels >= 1) {
        result.Nickels = Math.trunc (nickels);
        num = num % 5;
    }
    
    let pennies = num / 1;
    if (pennies >= 1 ) {
        result.Pennies =  Math.trunc (pennies);
        num = num % 100;
    }
    console.log (result)
}

coinChange(307)