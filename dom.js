// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var addTodoInput = document.getElementsByName('description')[0];



  var state = [{
      id: -3,
      description: 'firstffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff todo'
    },
    {
      id: -2,
      description: 'second todo'
    },
    {
      id: -1,
      description: 'third todo'
    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener


    // add span holding description
    var span = document.createElement('span');
    span.textContent = todo.description;

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');


    var icon = document.createElement('i');
    icon.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    icon.className = "fa fa-trash iconStyle";
    // deleteButtonNode.className = "btn delete";
    // deleteButtonNode.textContent="Delete";
    //deleteButtonNode.appendChild(icon);
    todoNode.appendChild(span);
    todoNode.appendChild(icon);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {

      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();

      var description = event.target.description.value; // event.target ....
      event.target.description.value="";

       //var description = addTodoInput.value; // event.target ....


      // console.log(description);
      // hint: todoFunctions.addTodo

      // var newTodo = {"description" : description};
      // var newState = todoFunctions.addTodo(state,newTodo );

      var newState = todoFunctions.addTodo(state, description); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
