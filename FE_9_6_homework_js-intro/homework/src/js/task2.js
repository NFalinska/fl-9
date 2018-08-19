// Your code goes here
let a = +prompt('Please write the length of the triangle side');
let b = +prompt('Please write the second length of the triangle side');
let angle = +prompt('Please write an angle value of the triangle');

const val_angle = 180;
let angle_radian = angle * Math.PI/val_angle;
let c = Math.sqrt(a*a+b*b-2*a*b*Math.cos(angle_radian));
let square = 1/2*a*b*Math.sin(angle_radian);
let per = a+ b + c;
let result;
 
if (a>0&&b>0&&angle>0&&angle<val_angle) {
	result = 'c length:'+ Math.round(c *100)/100 + 
             'Triangle square:' + Math.round(square *100)/100 +
             'Triangle perimeter:' + Math.round(per *100)/100;
} else {
	alert('Invalid data');
}
console.log(result);