var test = require('tape');
var logic = require('./logic');


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
/* add tests*/

/* delete tests*/
var todos1=  [
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

test('onDelete', function(t) {
  var actual = logic.deleteTodo(todos1,1);
  var expected = [{
    id: 2,
    description: 'make coffee',
    done: false,
  }];
  t.deepEqual(actual , expected , "delete done");
  t.end();
});
test('onDelete', function(t) {
  var actual = logic.deleteTodo(todos1,2);
  var expected = [{
    id: 1,
    description: 'make coffee',
    done: false,
  }];
  t.deepEqual(actual , expected , "delete done");
  t.end();
});

/* delete tests*/



/* Edit tests */



/* markTodo tests */



/* sortTodos tests */
