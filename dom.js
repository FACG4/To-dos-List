// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');

    var state = [
      { id: -3, description: 'first todo' },
      { id: -2, description: 'second todo' },
      { id: -1, description: 'third todo' },
    ]; // this is our initial todoList

    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');
      // you will need to use addEventListener

      // add span holding description

      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);

      // add markTodo button
      var markButtonNode = document.createElement('input').type = "checkbox";
       markButtonNode.addEventListener('click', function(event) {
             var newState = todoFunctions.deleteTodo(state, todo.id);
               update(newState);
            });
       
      // add classes for css
      markButtonNode.className = "mark";

      return todoNode;
    };


    // bind create todo form
    if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
        // https://developer.mozilla.org/en-US/docs/Web/Events/submit
        // what does event.preventDefault do?
        // what is inside event.target?

        var description = '?'; // event.target ....

        // hint: todoFunctions.addTodo
        var newState = []; // ?? change this!
        update(newState);
      });
    }

    // you should not need to change this function
    var update = function(newState) {
      state = newState;
      renderState(state);
    };
//// ishak
    // you do not need to change this function
    var renderState = function(state) {
      var divTodo = document.getElementById('todo');
      var divDone = document.getElementById('done');
      var todoListNode1 = document.createElement('ul');
      var todoListNode2 = document.createElement('ul');

      state.forEach(function(todo) {
        if (! todo.done) {
          todoListNode1.appendChild(createTodoNode(todo));
        }
        else {
          todoListNode2.appendChild(createTodoNode(todo));

        }
      });
      divTodo.appendChild(todoListNode1)
      divTodo.appendChild(todoListNode2)
/// ishak
      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };

  if (container) renderState(state);

})();
