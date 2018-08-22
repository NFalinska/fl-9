function guessNumber() {
    let question = confirm('Do you want to play a game?');
    let prize = 0;
    const random_number = 6;
    const random_number2 = 11;
    if (question === true) {
        let number = Math.floor(Math.random() * random_number);
        let userNumber = +prompt(
            'Enter a number from 0 to 5 \nAttemps left: 0 \nTotal prize: 0$ \nPossible prize on current attempt: 10$');
        if (userNumber === number) {
            const num = 10;
            prize += num;
        } else {
            let secondAttempt = +prompt(
                'Enter a number from 0 to 5 \nAttemps left: 1 \nTotal prize: 0$\nPossible prize on current attempt: 5$' 
            );
            if (secondAttempt === number) {
                const num1 = 5;
                prize += num1;
            } else {
                let thirdAttemrt = +prompt(
                    'Enter a number from 0 to 5 \nAttemps left: 2 \nTotal prize: 0$ \nPossible prize on attempt: 3$'
                );
                if (thirdAttemrt === number) {
                    const num2 = 3;
                    prize += num2;
                } else {
                    let result = confirm('Thank you for a game. Your prize is: ' 
					+ prize + '$. Do you want to play again?');
                    if (result === true) {
                        guessNumber();
                    } else {
                        alert('bye, bye');
                        return false;
                    }
                }
            }
        }
        let new_game = confirm('Congratulation! Your prize is: ' + prize + '$ Do you want to continue?');
        if (new_game === true) {
            let new_number = Math.floor(Math.random() * random_number2);
            let new_userNumber = +prompt(
				'Enter a number from 0 to 10 \nAttemps left: 0 \nTotal prize: ' 
				+ prize + 
				'$\nPossible prize on current attempt: 30$'
			);
            if (new_userNumber === new_number) {
                const num3 = 30;
                prize += num3;
            } else {
                let new_secondAttempt = +prompt(
                    'Enter a number from 0 to 10 \nAttemps left: 1 \nTotal prize: ' 
					+ prize + '$\nPossible prize on current attempt: 15$'
                );
                if (new_secondAttempt === new_number) {
                    const num4 = 15;
                    prize += num4;
                } else {
                    let new_thirdAttemrt = +prompt(
                        'Enter a number from 0 to 10 \nAttemps left: 1 \nTotal prize: ' 
						+ prize + '$\nPossible prize on current attempt: 7$'
                    );
                    if (new_thirdAttemrt === new_number) {
                        const num5 = 7;
                        prize += num5;
                    } else {
                        let result=confirm('Thank you for the game. Your prize is: ' 
					+ prize + '$. Do you want to play again?');
                        if (result === true) {
                            guessNumber();
                        } else {
                            alert('bye, bye');
                            return false;
                        }
                    }
                }
            }
		let one_more = confirm('Congratulation! Your prize is: ' + prize + '$ Do you want to play again?');
        if (one_more === true) {
            guessNumber();
        } else {
            alert('Thanks for the game! Have a nice day!')
			return false;
        }
        }else{
			alert('Ok, your prize is: '+ prize + '$. Bye!')
		}
  
    } else {
        alert('You did not become a millionaire, but can.')
    }
}
guessNumber();