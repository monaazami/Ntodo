console.log('connected!');
var todos = [];
var input = prompt('What would you like to do?');

while (input !== 'quit') {
	if (input === 'list') {
        listTodo()
	} else if (input === 'new') {
		newTodo()
    }else if(input === 'delete'){
        deleteTodo()
    }
    input = prompt('What would you like to do?');
}
console.log('Cool, you quit the app!');



function listTodo(){
    todos.forEach(function(todo,index){
        console.log('**********')
        console.log(index +':' +todo)
        console.log('**********')
    })
}

function newTodo(){
    var newT = prompt('Enter new todo');
    todos.push(newT);
}

function deleteTodo(){
    var deleted= prompt('Which index do you want to be deleted?')
    todos.splice(deleted,1)
}