// Your code goes here
let price = +prompt('Please fill a price');
let discount = +prompt('Please fill a discount');
let saved = price * discount/100;
let new_price = price - saved;
let result;

if (price > 0 && discount < 100 && discount > 0) {
	result = 'Price without discount:' + Math.round(price *100)/100 + 
		'Discount:' + discount.toFixed(2) +'%' +
		'Price with discount:' + new_price.toFixed(2) +
		'Saved:' + saved.toFixed(2) 
    } else {
		alert('invalid data')
	}

console.log(result);
