var test = require('tape');
var logic = require('./logic');

// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });

/* add tests*/

var todos=[];

test('Add task', function(t) {
  const acual = logic.addTodo(todos,'sleep');
  const exp =[{id:1,description:'sleep', done:'false'}];
  t.deepEqual(acual,exp,'should return sleep');
  t.end();

});
test('Add task', function(t) {
  const acual = logic.addTodo(todos,'sleep');
  const exp =[{id:2,description:'sleep', done:'false'}];
  t.deepEqual(acual,exp,'should return sleep');
  t.end();
<<<<<<< HEAD
});

/* add tests*/

var todos=  [
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
  {
    id: 2,
    description: 'make coffee',
    done: false,
  },
];




/* delete tests*/
test('onDelete', function(t) {
  var actual = logic.deleteTodo(todos,1);
  var expected = [{
    id: 2,
    description: 'make coffee',
    done: false,
  }];
  t.deepEqual(actual , expected , "delete done");
  t.end();
});
test('onDelete', function(t) {
  var actual = logic.deleteTodo(todos,2);
  var expected = [{
    id: 1,
    description: 'make coffee',
    done: false,
  }];
  t.deepEqual(actual , expected , "delete done");
  t.end();
});
=======

});
test('Add task', function(t) {
  const acual = logic.addTodo(todos,'sleep');
  const exp =[{id:3,description:'sleep', done:'false'}];
  t.deepEqual(acual,exp,'should return sleep');
  t.end();

});


/* delete tests*/

>>>>>>> c78e0cd148ed3b1142fbd12bbe4d81e767cf8caf



/* Edit tests */



/* markTodo tests */



/* sortTodos tests */
