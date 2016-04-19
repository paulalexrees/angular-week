toDoApp.controller('ToDoController', function() {
  var self = this;

  self.todos = [{ text: "ThingToDo1", completed: true }, { text: "ThingToDo2", completed: false }];

  self.addToDo = function(thingToDo) {
    self.todos.push({text: thingToDo, completed: false});
  };

  self.removeToDo = function(thingToDo) {
    var i = self.todos.indexOf(thingToDo);
    if(i != -1){
      self.todos.splice(i,1);
  }
};
});
