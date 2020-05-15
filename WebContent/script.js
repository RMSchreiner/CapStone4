let nArr = []; //name array
let pArr = []; //price array


//here when an button is clicked it pushes that item to the cart array
function addToCart(pName, pPrice){
	nArr.push(pName);
	pArr.push(pPrice);
}
var txt = "";
function printCart(){
	var txt = "";	
	var cost = "";
	let i;
	let total = 0;
	for (i=0; i < pArr.length; i++) {
		total += pArr[i];
		txt = txt + nArr[i]+" $"+ pArr[i]+".00" +"<br>";

	}

	var miTax = total * .06;
	var netTotal = miTax + total;

	var finalCart = document.getElementById("finalCart");

	finalCart.innerHTML= "Current Order:" + "<br>" + "<br>" + txt + "<br>" + "SUBTOTAL: $" + total + ".00"
	+ "<br>" + "MI STATE SALES TAX 6%:  $" + miTax + "<br>" + "TOTAL: $" + netTotal;

}

function clearCart(){
		nArr.splice(0,nArr.length);
		pArr.splice(0,pArr.length);
		
		var finalCart = document.getElementById("finalCart");
		
		finalCart.innerHTML= "You can now reselect your order.";	
		
}