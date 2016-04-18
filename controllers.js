toDoApp.controller('ToDoController', function($scope, $timeout) {

  var self = this;
  var gunslinger = false;
  var st = new Stopwatch();
  var myVar = null;

  self.todos = [
    {text: "Get rich", completed:true},
    {text: "Die trying", completed:false}
  ];

  self.addToDo = function(toDoText) {
    if(self.gunSlingerPlay(self.toDoText)){
      self.todos.push({text: "GUNSLINGER"});
      self.startGunslinger();
    } else {
    self.todos.push({text:self.toDoText, completed:false});
    }
  };

  self.removeToDo = function(thisToDo) {
    var i = self.todos.indexOf(thisToDo);
    if(i != -1){
      self.todos.splice(i,1);
    }
  };

  // $timeout(function(){$scope.gunThing = "DRAW!"}, 2000);
  $scope.gunText = "";

  self.gunSlingerPlay = function(text) {
    return text === "Gunslinger";
  };

  self.startGunslinger = function() {
    console.log("GUNSTART!");
    // $scope.gunText = "Ready...";
    // setTimeout(function(){alert("yo")}, 2000);

    st.start();
    myVar = setTimeout(function (){
            st.stop(); // Stop it 5 seconds later...
            alert("Too slow!");
          }, 3000);
  };

  self.changeText = function(){
    console.log("fyck");
    $scope.gunText = "Ready...";
  };

  self.shoot = function() {
    clearTimeout(myVar);
    st.stop();
    alert("You win in: " + st.getSeconds() + " seconds!");
  };



});
