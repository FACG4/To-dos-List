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
      const span = document.createElement('span');
      console.log(span);
      span.textContent = todo.description;
      span.id = todo.id;
      todoNode.appendChild(span);
  
      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      var icon = document.createElement('i');
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      icon.className = "fa fa-trash iconStyle";
      deleteButtonNode.className = "btn delete";


      deleteButtonNode.appendChild(icon);
      todoNode.appendChild(deleteButtonNode);

  
      // add markTodo button
  
      // add classes for css

      // add Edit buttons
      
      const editButton = document.createElement('button');
      const editIcon = document.createElement('i');
      const editInput = document.createElement('input');
      const savedSpan = document.createElement('span');
      editButton.id = 'edit';
      editButton.appendChild(editIcon);
      todoNode.appendChild(editButton);
      

      editButton.addEventListener('click', function(e) {
        if (e.target.id === 'edit') {
          editButton.type = 'text';
          editInput.value = span.textContent;
          todoNode.insertBefore(editInput, span);
          todoNode.removeChild(span);
          console.log(editButton.id);
          editButton.id = 'save';
          console.log(editButton.id);

        } else if (e.target.id === 'save'){
          savedSpan.textContent = editInput.value;
          todoNode.insertBefore(savedSpan, editInput);
          todoNode.removeChild(editInput);
          editButton.id = 'edit';
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
        //var description = addTodoForm.firstElementChild.value;

        var description = event.target.description.value; // event.target ....
        event.target.description.value="";
        // var x = event.target;
        // console.dir(x);

        // hint: todoFunctions.addTodo
        //var newTodo = {};
        var newTodo = {"description" :description};
        var newState = todoFunctions.addTodo(state,newTodo );
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