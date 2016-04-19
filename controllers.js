toDoApp.controller('ToDoController', function() {
  var self = this;

  self.todos = [{ text: "ThingToDo1", completed: true }, { text: "ThingToDo2", completed: false }];

  self.addToDo = function(thingToDo) {
    self.todos.push({text: thingToDo, completed: false});
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
});


// var object = { text: "Hello World!", completed: false };
