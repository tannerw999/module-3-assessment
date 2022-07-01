console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submission successful! Someone will contact you.")
	// console.log('form submit');
}


const duckyImage= document.querySelector(".ducky");
duckyImage.addEventListener("mouseover", function(){ alert("You are almost as loveable as this rubber ducky!"); });


// let form = document.querySelector('#contact');

// form.addEventListener('submit', handleSubmit);

// let test = document.getElementById("#ducky");

// test.addEventListener("mouseover", function( event ) {
//   alert("mouse over test!")
//   , false);