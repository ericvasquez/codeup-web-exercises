"use strict";

function powersOfTwo() {
    // var num = 1;
    // while (num < 65536) {
    //     num *= 2;
    //     console.log(num);
    // }
    var exp = 1;
    while (exp < 17) {
        console.log(1<<exp);
        exp++;
    }

}


var iceCream = function (){
    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("we are starting with " + allCones + " cones.");

    do{
// This expression will generate a random number between 1 and 5

 //   5 cones sold...  // if there are enough cones
  //  Cannot sell you 6 cones I only have 3...  // If there are not enough cones
  //  Yay! I sold them all! // If there are no more cones


            var customerWants = Math.floor(Math.random() * 5) + 1;
            if (allCones >= customerWants) {
                //sell cones
                allCones -= customerWants;
                console.log(customerWants + " cones sold...");
            } else {
                //no deal
                console.log("Cannot sell you "+ customerWants + " cones I only have "+allCones +"...")
            }
        } while (allCones > 0)
        console.log("Yay! I sold them all!");
};
iceCream();

