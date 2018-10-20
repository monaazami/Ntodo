console.log('connected!');
var todos = [];
var input = prompt('What would you like to do?');

while (input !== 'quit') {
	if (input === 'list') {
        todos.forEach(function(todo,index){
            console.log('**********')
            console.log(index +':' +todo)
            console.log('**********')
        })
		// console.log(todos);
	} else if (input === 'new') {
		var newTodo = prompt('Enter new todo');
		todos.push(newTodo);
    }else if(input === 'delete'){
        var deleted= prompt('Which index do you want to be deleted?')
            todos.splice(deleted,1)
        

    }
    input = prompt('What would you like to do?');
}
console.log('Cool, you quit the app!');
