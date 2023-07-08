console.log("My profile");


function getFavColor() {
	//evt.preventDefault();
	
	alert(' Favorite color => Pink');
}
function getFavPlace() {
	//evt.preventDefault();
	
	alert(' Favorite place => Spain');
}
function getFavRitual() {
	//evt.preventDefault();
	
	alert(' Favorite ritual => Sleeping');
}
// function findARandomRestaurant() {
// 	//evt.preventDefault();
	
// 	alert(' Resturant');
// }
// let findARandomRestaurant=()=>{
// 	alert(' Random restaurant');
// }

document.querySelector("#color").addEventListener("click",getFavColor)
document.querySelector("#place").addEventListener("click",getFavPlace)
document.querySelector("#ritual").addEventListener("click",getFavRitual);

