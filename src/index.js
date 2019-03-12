// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
   // worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the strings H, Q, D, N and P.
   let exchangeObject = {};
   if (currency <= 0) return exchangeObject;
   if (currency > 10000) {
       exchangeObject.error = `You are rich, my friend! We don't have so much coins for exchange`;
    } else {
       let countH = 0, countQ = 0, countD = 0, countN = 0, countP = 0;
      
       //count 50c
       countH = Math.floor(currency / 50);
       if (countH != 0) {
           exchangeObject.H = countH;
       } 

       //count 25c
       currency = currency % 50;
       countQ = Math.floor(currency / 25);
       if (countQ != 0) {
           exchangeObject.Q = countQ;
       } 
      
       //count 10c
       currency = currency % 25;
       countD = Math.floor(currency / 10);
       if (countD != 0) {
           exchangeObject.D = countD;
       } 

       //count 5c
       currency = currency % 10;
       countN = Math.floor(currency / 5);
       if (countN != 0) {
           exchangeObject.N = countN;
       } 

       //count 1c
       countP = currency % 5;
       if (countP != 0) {
           exchangeObject.P = countP;
       } 

   }

   return exchangeObject;

}
