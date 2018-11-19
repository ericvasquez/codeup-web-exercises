"use strict";
console.log("Hello from external JavaScript!");
    alert("Welcome to my Website!");
    var userInput = prompt("What is your favorite color?");
    alert("Great, " + userInput + " is my favorite color too!");
var mermaid = prompt("How many days will you have The Little Mermaid?");
var bear = prompt("How many days will you have Brother Bear?");
var hercules = prompt("How many days will you have the Hercules?");
var price = prompt("How much does it cost for 1 day? ");
var TotalPrice = (parseFloat(mermaid) + parseFloat(bear) + parseFloat(hercules))*parseFloat(price);
alert("The total you will have to pay is: $ " + parseFloat(TotalPrice));

var google = prompt("What is your hourly rate at Google?");
var GoogleHours = prompt("How many hours did you work at Google this week?");
var amazon = prompt("What is your hourly rate at Amazon?");
var AmazonHours = prompt("How many hours did you work at Amazon this week?");

var facebook = prompt("What is your hourly rate at Facebook?");
var FacebookHours = prompt("How many hours did you work at Facebook this week?");

var TotalPay = (parseFloat(google) * parseFloat(GoogleHours))+ (parseFloat(amazon) * parseFloat(AmazonHours)) + (parseFloat(facebook) + parseFloat(FacebookHours))
alert("Your total pay is: $ " + parseFloat(TotalPay));

