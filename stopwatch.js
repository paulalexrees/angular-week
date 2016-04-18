function Stopwatch(){
  var startTime, endTime, instance = this;

  this.start = function (){
    startTime = new Date();
  };

  this.stop = function (){
    endTime = new Date();
  };

  this.clear = function (){
    startTime = null;
    endTime = null;
  };

  this.getSeconds = function(){
    if (!endTime){
    return 0;
    }
    // return Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    return ((endTime.getTime() - startTime.getTime()) / 1000);
  };
}
