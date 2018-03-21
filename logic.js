
var todoFunctions = {
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),


  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {

    const newArray = todoFunctions.cloneArrayOfObjects(todos);
    newArray.push({
      id: todoFunctions.generateId(),
      description: newTodo,
      done: false
    });
    return newArray;

  },
  deleteTodo: function(todos, idToDelete) {
    var todos2 = todoFunctions.cloneArrayOfObjects(todos);
    todos2 = todos2.filter(function(item) {
      return item.id != idToDelete
    })
    return todos2;
  },
  markTodo: function(todos, idToMark) {

    return todos.map(function(todo){
              var newTodo = {};

              Object.keys(todo).forEach(function(key) {
                  newTodo[key] = todo[key]
              });

              if (newTodo.id === idToMark) {
                  newTodo.done = !newTodo.done;
              }
              return newTodo;
          });

  },
  sortTodos: function(todos, sortFunction) {

  },
};

if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
