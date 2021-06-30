// top names of 1996,
var firstNames = ["Emily","Michael", "Jessica","Matthew", "Ashley",
"Jacob","Sarah","Christopher","Samantha","Joshua","Taylor","Nicholas","Hannah","Tyler","Alexis", "Brandon","Rachel","Austin","Elizabeth","Andrew"];

// top surnames in the U.S.
var lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", 
"Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson"];

// randomly select first and last names then add to collection variables
pm.variables.set("firstname", firstNames[_.random(firstNames.length - 1)]);
pm.variables.set("lastname", lastNames[_.random(lastNames.length - 1)]);

// the random function comes from the loadash module ("_.")
// https://lodash.com/docs/4.17.11#random
pm.variables.set("totalprice", _.random(50, 250));
pm.variables.set("depositpaid", (_.random(1) === 1));

// the moment module helps with date manipulation and formatting
const moment = require("moment");
var checkin = moment().add("days", _.random(1, 180));
pm.variables.set("checkin", checkin.format("YYYY-MM-DD"));

var checkout = checkin.add("days", _.random(1, 14));
pm.variables.set("checkout", checkout.format("YYYY-MM-DD"));

var needs = ["breakfast", "lunch", "early checkin", "late checkout", null];
pm.variables.set("additionalneeds", needs[_.random(needs.length-1)]);

// put all the selected variables into a new booking object and save to a variable
var booking = {
    "firstname" : pm.variables.get("firstname"),
    "lastname" : pm.variables.get("lastname"),
    "totalprice" : pm.variables.get("totalprice"),
    "depositpaid" : pm.variables.get("depositpaid"),
    "bookingdates" : {
        "checkin" : pm.variables.get("checkin"),
        "checkout" : pm.variables.get("checkout")
    },
    "additionalneeds" : pm.variables.get("additionalneeds")
}
pm.variables.set("new_booking", booking)