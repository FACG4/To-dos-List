var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

/* add tests*/




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



/* sortTodos tests */


