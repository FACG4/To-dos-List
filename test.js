var test = require('tape');
var logic = require('./logic');




test('Example test', function(t) {
  t.pass();
  t.end();
});


var todos=[];

/* add tests*/

test('Add task', function(t) {
  const acual = logic.addTodo(todos,'sleep');
  const exp =[{id:1,description:'sleep', done:false}];
  t.deepEqual(acual,exp,'should return sleep');
  t.end();

});
test('Add task', function(t) {
  const acual = logic.addTodo(todos,'sleep');
  const exp =[{id:2,description:'sleep', done:false}];
  t.deepEqual(acual,exp,'should return sleep');
  t.end();

});

test('Add task', function(t) {
  const acual = logic.addTodo(todos,'sleep');
  const exp =[{id:3,description:'sleep', done:false}];
  t.deepEqual(acual,exp,'should return sleep');
  t.end();
});
test('Add task', function(t) {
  const acual = logic.addTodo(todos,'sleep');
  const exp =[{id:4,description:'sleep', done:false}];
  t.deepEqual(acual,exp,'should return sleep');
  t.end();

});
// /* add tests*/
//
// /* delete tests*/
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
test('editTodo test', function(t) {
  t.deepEqual(logic.editTodo([
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
],1,'make tea'),[
{
  id: 0,
  description: 'smash avocados',
  done: true,
},
{
  id: 1,
  description: 'make tea',
  done: false,
}], 'a;ldskfja;lskdj' );
  t.end();
});


/* markTodo tests */
test("markTodo function", function(t) {
    var arr = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];
    var actual=logic.markTodo(arr,1);
    var expected = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: true},
        { id: 2, description: 'third todo', done: false}
    ];

    t.deepEqual(actual, expected, 'second marked');
    t.end();


});

test("markTodo function", function(t) {
    var arr = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];
    var actual=logic.markTodo(arr,0);
    var expected = [
        { id: 0, description: 'first todo', done: true},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];

    t.deepEqual(actual, expected, 'second marked');
    t.end();


});

test("markTodo function", function(t) {
    var arr = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];
    var actual=logic.markTodo(arr,2);
    var expected = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: true}
    ];

    t.deepEqual(actual, expected, 'second marked');
    t.end();


});



/* sortTodos tests */
