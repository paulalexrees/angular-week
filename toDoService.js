toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory
){

  this.getAll = function() {

    var todos =[];

    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
    .then(function(resp) {
      resp.data.forEach(function(data) {
        todos.push(new ToDoFactory(data.text));
      });
    },function(err){
      console.log('no!');
    });
    return todos;

  };

}]);
