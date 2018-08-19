// Your code goes here
let price = +prompt('Please fill a price');
let discount = +prompt('Please fill a discount');
let saved = price * discount/100;
let new_price = price - saved;
let result;

if (price > 0 && discount < 100 && discount > 0) {
	result = 'Price without discount:' + Math.round(price *100)/100 + 
		'Discount:' + Math.round(discount * 100)/100 +'%' +
		'Price with discount:' + Math.round(new_price * 100)/100 +
		'Saved:' + Math.round(saved * 100)/100;
    } else {
		alert('invalid data')
	}

console.log(result);
