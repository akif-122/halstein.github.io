
 
 let infoOpen = document.querySelector(".info-btn button");

 let infoClose = document.querySelector(".sideCLose span");
 let info = document.querySelector("#sidebar");
 let body = document.querySelector("body");




 infoOpen.addEventListener("click", function(){
	info.style.right = "0%";
},true)

infoClose.addEventListener("click", function(){
	info.style.right = "-100%";
},true)

body.addEventListener("click", function(){
	info.style.right = "-100%";

},true)

info.addEventListener("click", function(){
	info.style.right = "0%";

},true)