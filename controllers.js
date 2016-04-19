toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {
  var self = this;

  self.todos = ToDoService.getAll();

  self.addToDo = function(thingToDo) {
    console.log("fuckoff");
    self.todos.push(new ToDoFactory(thingToDo));
  };

  self.removeToDo = function(thingToDo) {
    var i = self.todos.indexOf(thingToDo);
    if(i != -1){
      self.todos.splice(i,1);
  }
};
}]);
