console.log("Neighborhood");

let findARandomRestaurant=(e)=>{
let restaurants= ["Gringos","Central Texas Style Barbecue",
"Santa Barbara Italian Cafe","Killen's Texas Barbecue","Magnolia Cajun Comfort"];
let randomNumber  = Math.floor(Math.random() *restaurants.length);
alert("Enjoy your dinner at "+restaurants[randomNumber]);


}




