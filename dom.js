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
      description: 'first todo'
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
    todoNode.id = todo.id;
    
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
    
    todoNode.appendChild(span);
    todoNode.appendChild(icon);

    // add markTodo button

    // add classes for css

    // Edit buttoon

      const editButton = document.createElement('button');
      const editIcon = document.createElement('i');
      const editInput = document.createElement('input');
      editIcon.className="fa fa-pencil iconStyle";
      editButton.id = 'edit';
      editButton.appendChild(editIcon);
      todoNode.appendChild(editButton);



      editButton.addEventListener('click', function(e) {
        if (e.target.id === 'edit') {
          editInput.value = span.textContent;
          todoNode.insertBefore(editInput, span);
          span.classList.add('hidden');
          editButton.id = 'save';
          editIcon.className= 'fa fa-check iconStyle';

        } else if (e.target.id === 'save'){
         const newState =  todoFunctions.editTodo(state, e.target.parentNode.getAttribute('id'), editInput.value);
         todoNode.removeChild(editInput);
         update(newState);
          // editButton.id = 'edit';
        }
      });

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {

      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = event.target.description.value;
      event.target.description.value="";

      // hint: todoFunctions.addTodo

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
