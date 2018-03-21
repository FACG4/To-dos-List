var test = require('tape');
var logic = require('./logic');
/// ishak test
test("markTodo function", function(t) {
    var arr = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];
    var actual=logic.markTodo(arr,1)
    var expected = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: true},
        { id: 2, description: 'third todo', done: false}
    ];

    t.deepEqual(actual, expected, 'second marked');
    t.end();


})

test("markTodo function", function(t) {
    var arr = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];
    var actual=logic.markTodo(arr,0)
    var expected = [
        { id: 0, description: 'first todo', done: true},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];

    t.deepEqual(actual, expected, 'second marked');
    t.end();


})

test("markTodo function", function(t) {
    var arr = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];
    var actual=logic.markTodo(arr,2)
    var expected = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: true}
    ];

    t.deepEqual(actual, expected, 'second marked');
    t.end();


})
///// ishak test
