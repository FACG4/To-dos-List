(function() {
  var container = document.getElementById('todo-container');
  var containerDone = document.getElementById('done-container');
  var addTodoForm = document.getElementById('add-todo');
  var addTodoInput = document.getElementsByName('description')[0];

  var state = [{
      id: -3,
      description: 'firstffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff todo',
      done:true
    },
    {
      id: -2,
      description: 'second todo',
      done:false

    },
    {
      id: -1,
      description: 'third todo',
      done:false

    },
  ];

  var createTodoNode = function(todo,checked) {
    var todoNode = document.createElement('li');


    var span = document.createElement('span');
    span.textContent = todo.description;

    var deleteButtonNode = document.createElement('button');


    var icon = document.createElement('i');
    icon.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    icon.className = "fa fa-trash iconStyle";

    var markButtonNode = document.createElement('input');
    markButtonNode.setAttribute("type","checkbox");
    if (checked) {
      markButtonNode.setAttribute("checked","true");

    }
     markButtonNode.addEventListener('click', function(event) {
           var newState3 = todoFunctions.markTodo(state, todo.id);
             update(newState3);
          });


    todoNode.appendChild(span);
    todoNode.insertBefore(markButtonNode,todoNode.firstChild);
    todoNode.appendChild(icon);

    // Edit buttoon

      const editButton = document.createElement('button');
      const editIcon = document.createElement('i');
      const editInput = document.createElement('input');
      const savedSpan = document.createElement('span');
      editButton.id = 'edit';
      editIcon.className='fa fa-pencil iconStyle';
      editButton.appendChild(editIcon);
      editButton.className='edit'
      todoNode.appendChild(editButton);


      editButton.addEventListener('click', function(e) {
        if (e.target.id === 'edit') {
          editButton.type = 'text';
          editInput.value = span.textContent;
          todoNode.insertBefore(editInput, span);
          todoNode.removeChild(span);
          editButton.id = 'save';

        } else if (e.target.id === 'save'){
          savedSpan.textContent = editInput.value;
          todoNode.insertBefore(savedSpan, editInput);
          todoNode.removeChild(editInput);
          editButton.id = 'edit';
        }
      });

    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {

      event.preventDefault();

      var description = event.target.description.value;
      event.target.description.value="";
      var newState = todoFunctions.addTodo(state, description);
      update(newState);
    });
  }

  var update = function(newState) {
    state = newState;
    renderState(state);
  };


  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    var todoListNode2 = document.createElement('ul');
    todoListNode2.className='done_i';


state.forEach(function(todo) {
  if (! todo.done) {
    todoListNode.appendChild(createTodoNode(todo,false));
  }
  else {
    todoListNode2.appendChild(createTodoNode(todo,true));

  }
});
    container.replaceChild(todoListNode, container.firstChild);
    containerDone.replaceChild(todoListNode2, containerDone.firstChild);
  };

  if (container) renderState(state);
})();
