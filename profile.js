// step 1: Grab html element
const myFavColorBtn= document.querySelector("#color");
const myFavPlaceBtn= document.querySelector("#place");
const myFavRitualBtn= document.querySelector("#ritual");

// step 2 write out function
myFavColorBtn.addEventListener("click", function(){ alert("Sage green!"); });
myFavPlaceBtn.addEventListener("click", function(){ alert("The mountains!"); });
myFavRitualBtn.addEventListener("click", function(){ alert("Getting a big soda after a long day."); });

//last step - combine step one and step two adding an event listener

