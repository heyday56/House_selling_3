"use strict"
/* Login JavaScript */
function loginValidate(){
	const username=document.querySelector("#username").value;
	const password=document.querySelector("#pass").value;	
if(username.indexOf(" ")>-1||username.length<8 ||username===""|| username.indexOf("  ")>-1 ||username.indexOf("=")>-1 ||password.indexOf(" ")>-1 || password.indexOf("  ")>-1 ||password.indexOf("=")>-1 ||password==""){
document.querySelector("#errUser").textContent='use correct email, and not use "="';
document.querySelector("#errPass").textContent='Password is required, and hard and not use "="';
return false;
}
else{
	return true;
}
}



/*home javaScript code*/
const image=["image/house1.jpg","image/house2.jpg","image/house3.jpg","image/house4.jpg","image/house5.jpg","image/house6.jpg","image/house7.jpg"];
let index=0;
let interval="";
function show(address){
	document.getElementById("show").src=address;
}
function showByInterval(){
	let address=image[index];
	document.getElementById("show").src=address;
	index++;
	if(index>=image.length){
		index=0;
	}
interval=window.setTimeout(showByInterval,5000);
}

function stopInterval(){
	window.clearInterval(interval);
}
function startInterval(){
	showByInterval();
}
/*buy javaScript code*/
function checkEmail(){
	const email=document.querySelector("#email").value;
	if (email.indexOf(" ")>-1 || email.indexOf("  ")>-1 || email.lastIndexOf("@")<3||email.indexOf("@")<0||email.indexOf(".com")<0) {
		document.querySelector("#error").textContent="Please type a real email!";
	}
}
