function guessNumber(){
	let question = confirm('Do you want to play a game?');
    let prize = 0;
	const random_number = 5;
	const random = 1;
	if(question===true) {
	let number = Math.floor(Math.random() * random_number + random);
	let userNumber = prompt(
		'Enter a number from 0 to 5 \nAttemps left: 0 \nTotal prize: 0 \nPossible prize on current attempt: 10$');
		if(userNumber===number){
			const num = 10;
			prize=+num;
		} else {
			let secondAttempt = prompt(
				'Enter a number from 0 to 5 \nAttemps left: 1 \nTotal prize: 0 \nPossible prize on current attempt: 5$'
			);
			if(secondAttempt===number){
				const num1 = 5;
				prize=+num1;
			} else {
			let thirdAttemrt = prompt(
				'Enter a number from 0 to 5 \nAttemps left: 2 \nTotal prize: 0 \nPossible prize on current attempt: 3$'
			);	
			if(thirdAttemrt===number) {
				const num2 = 3;
				prize=+num2;
			} else {
				let result = confirm('Thank you for a game. Your prize is: ' + prize + '$. Do you want to play again?');
				if(result===true){
					guessNumber();
				}else{
					alert('bye, bye');
					return false;
				}
			}
		}
		} 
		confirm('Congratulation! Your prize is: ' + prize + '$ Do you want to continue?');
	} else {
	alert('You did not become a millionaire, but can.');
	}
}

guessNumber();
