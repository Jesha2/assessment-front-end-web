console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(' The form has been submitted successfully');
}
function mouseOverFunction() {
	
	alert(' You are in for a treat as you browse through our captivating gallery of feline charm.');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let  img = document.querySelector("img");
img.addEventListener("mouseover" , mouseOverFunction)