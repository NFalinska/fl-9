function registration(){
	let login = prompt('Please write your login');
    if (login==='') {
    alert('Canceled')
	return false;
    } else if (login.length<4) {
	alert(' I dont know any users having name length less than 4 symbols')
	return false;
	} else if (login!==''&&login!=='User') {
	alert('I dont know you')
	return false;
	}

	let password = prompt('Please write your password');
	let now = new Date().getHours();
	switch(password){
		case '':
		alert('Canceled');
		break;
		case 'SuperUser':
			if(now > 20) {
				alert('Good evening!');
			} else {
				alert('Good day!');
			}
		break;
		default:
		alert('Wrong password');
		break;
	}
}
registration();
