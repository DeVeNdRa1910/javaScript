/* 
Comparision  < , > , == , <= ,  >= , != 
comparatoe always compare same data type 
*/

/* 
console.log(2 > 4); // false
console.log(2 >= 3); // false
console.log(2 < 2); // false
console.log(2 <= 2);  // true
console.log(2 != 3);   // true
// console.log(2 = 2); Nonsance



avoid these type of Comparisions

    console.log( 2 == 2);           // true
    console.log(null > 0);          // false
    console.log(null == 0);         // false
    console.log(null < 0);          // false
    console.log(null >= 0);         // true here null is convert in integer
    console.log(null <= 0);         // true here null is convert in integer 

    console.log(undefined > 0);     // false
    console.log(undefined == 0);    // false
    console.log(undefined < 0);     // false
    console.log(undefined >= 0);    // true here undefined is convert in integer
    console.log(undefined <= 0);    // true here undefined is convert in integer 

*/



console.log(  "2" == 2);
/* 
    here "2" is a string firstly it would be convert in integer
    then compare that why result is true

 */


console.log(  "2" === 2);

/* 
here Strict check are also present who fisrt compare data type of both comparators
then work on thei magnitude represent by === 
*/
