toDoApp.factory('ToDoFactory', function() {

   Todo = function(thingToDo){
    console.log("shitoff");
    this.text = thingToDo;
    this.completed = false;
  };

  Todo.prototype.complete = function() {
    this.completed = true;
  };

  return Todo;


});
