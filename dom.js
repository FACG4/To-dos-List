(function() {
  var container = document.getElementById('todo-container');
  var containerDone = document.getElementById('done-container');
  var addTodoForm = document.getElementById('add-todo');
  var addTodoInput = document.getElementsByName('description')[0];

  var state = JSON.parse(localStorage.getItem('state')) || [];

  var createTodoNode = function(todo, checked) {
    var todoNode = document.createElement('li');
    todoNode.id = todo.id;
    
    // you will need to use addEventListener


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
    markButtonNode.setAttribute("type", "checkbox");
    if (checked) {
      markButtonNode.setAttribute("checked", "true");

    }
    markButtonNode.addEventListener('click', function(event) {
      var newState3 = todoFunctions.markTodo(state, todo.id);
      update(newState3);
    });


    todoNode.appendChild(span);
    todoNode.insertBefore(markButtonNode, todoNode.firstChild);
    todoNode.appendChild(icon);

    // Edit buttoon

    const editButton = document.createElement('button');
    const editIcon = document.createElement('i');
    const editInput = document.createElement('input');
    
    editButton.id = 'edit';
    editIcon.className = 'fa fa-pencil iconStyle';
    editButton.appendChild(editIcon);
    editButton.className = 'edit'
    todoNode.appendChild(editButton);
    editInput.autofocus = true;


    
    editButton.addEventListener('click', function(e) {
      // update(state);          
        if (e.target.id === 'edit') {
          editInput.value = span.textContent;
          todoNode.insertBefore(editInput, span);
          span.classList.add('hidden');
          editButton.id = 'save';
          editIcon.className = 'fa fa-check iconStyle';
          
        } else if (e.target.id === 'save'){
          editInput.autofocus = true;
          const newState =  todoFunctions.editTodo(state, e.target.parentNode.getAttribute('id'), editInput.value);
          todoNode.removeChild(editInput);
          update(newState);
          // editButton.id = 'edit';
        }
      })
    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {

      event.preventDefault();

      var description = event.target.description.value;
      if(description.trim().length>0){
      var newState = todoFunctions.addTodo(state, description);
      update(newState);
      event.target.description.value = "";
        
      }
      else{
        alert('Enter todo');
      }
    });
  }

  var update = function(newState) {
    state = newState;
    renderState(state);
  };


    var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    var todoListNode2 = document.createElement('ul');
    todoListNode2.className = 'done_i';

    localStorage.setItem('state', JSON.stringify(state));    

    state.forEach(function(todo) {
      if (!todo.done) {
        todoListNode.appendChild(createTodoNode(todo, false));
      } else {
        todoListNode2.appendChild(createTodoNode(todo, true));

      }
    });
    
    container.replaceChild(todoListNode, container.firstElementChild);
    containerDone.replaceChild(todoListNode2, containerDone.firstElementChild);
  };

  if (container) renderState(state);
})();
