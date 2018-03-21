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

});
test('Add task', function(t) {
  const acual = logic.addTodo(todos,'sleep');
  const exp =[{id:3,description:'sleep', done:'false'}];
  t.deepEqual(acual,exp,'should return sleep');
  t.end();

});


/* delete tests*/




/* Edit tests */



/* markTodo tests */



/* sortTodos tests */
