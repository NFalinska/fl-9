window.onload = function() {

    let todoList = [];
    const maxItem = 10;

    document.getElementById('add').onclick = function() {
        let task = document.getElementById('in').value;
        let temp = {};

        temp.todo = task;
        //		 temp.check = false;
        let i = todoList.length;
        if (task !== '') {
            todoList[i] = temp;
        }
        if (todoList.length > maxItem) {
            document.getElementById('info').innerHTML = 'Maximum item per list are created';
            document.getElementsByClassName('new_item').setAttribute('disabled');
        }

        out();


    }

    function out() {
        let out = [];
        for (let key in todoList) {
            if (todoList[key] !== 'undefined') {
                out += `<div id="item">
            <i class="material-icons">check_box_outline_blank</i>
            <div class="text">${todoList[key].todo}</div> 
            <i id="delete"class="material-icons delete">delete</i><br></div>`;
                document.getElementById('out').innerHTML = out;
                document.getElementById('delete').onclick = function() {
                    document.getElementById('item').innerHTML = '';
                }

            }

        }

    }
}