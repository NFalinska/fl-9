window.onload = function() {

    let todoList = [];
	const maxItem = 10;

    document.getElementById('add').onclick = function() {
        let task = document.getElementById('in').value;
        let temp = {};
        temp.todo = task;
        //		 temp.check = false;
        let i = todoList.length;
        todoList[i] = temp;
        if (todoList.length > maxItem) {
            document.getElementById('info').innerHTML = 'Maximum item per list are created';
            document.getElementById('in').setAttribute('disabled', 'disabled');
        }
        out();
    }

    function out() {
        let out = '';
        for (let key in todoList) {
			if(todoList[key]!==undefined){
            out += todoList[key].todo + '<br>';
			document.getElementById('out').innerHTML = out;
			}
        }
       
    }
	
}