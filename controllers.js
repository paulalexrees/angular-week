toDoApp.controller('ToDoController', function() {
  this.todos = [
    {text: "Get rich", completed:true},
    {text: "Die trying", completed:false}
  ];

  this.addToDo = function(toDoText) {
    this.todos.push({text:this.toDoText, completed:false});
  };

  this.removeToDo = function(thisToDo) {
    var i = this.todos.indexOf(thisToDo);
    if(i != -1){
      this.todos.splice(i,1);
    }    
  };


});
