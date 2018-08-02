(function(){
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false;

  start.addEventListener('click', function(){
    if(isStarted === true){
      return; // shori shitara owari
    }
      isStarted = true;
      startTime = Date.now();
      this.className="pushed";
      stop.className='';
      result.textContent = '0.000';
      result.className ='standby';
  });

  stop.addEventListener('click',function(){
      var elapsedTime;
      var difference;
      if(isStarted === false){
        return;
      }
      isStarted = false;
      elapsedTime = (Date.now() - startTime)/1000;
      result.textContent = elapsedTime.toFixed(3);
      this.className='pushed';
      start.className='';
      result.className='';

      difference = elapsedTime - 5.0;
      //if(difference > -1.0 && difference < 1.0){
        if(Math.abs(difference) < 1.0){
          result.className ='perfect';
      }
  });
})();
