function validEmail(str) {
  //your JS code here.
	if(str === "") return false
	let indOfRate = str.indexOf("@");
	let indOfDot = str.indexOf(".");
	let indOfCom = str.indexOf("com");
	let indOfCo = str.indexOf(Co);
	let indOfIn = str.indexOf("in");
	if(indOfDot<indOfRate){
		return false
	}else{
		return true
	}
	
}

// Do not change the code below.
//const str = prompt("Enter an email address.");
alert(validEmail(str));
