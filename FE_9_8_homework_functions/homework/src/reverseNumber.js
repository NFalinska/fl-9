function reverseNumber(num) {
       let reversedNumber = Math.abs(num).toString().split('').reverse().join('')
           .replace(/^0+/, '');

       return reversedNumber*Math.sign(num);
   }
reverseNumber();