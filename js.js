function Ttt(name) {
  
  var innerAdd = {
    x: '<span>x</span>',
    o: '<span>o</span>',
    c: ''
  };
  var now = innerAdd.x;
  
  
  table.addEventListener('click', function (e) {
    if (e.target == table) {
      return;
    }
    
    if (e.target.innerHTML == ''){
      e.target.innerHTML = now;
    }
    
    if (now == innerAdd.x) {
      now = innerAdd.o;
    } else if (now ==innerAdd.o) {
      now = innerAdd.x;
    }
    console.log(table.querySelectorAll('td'));
  });
  
  (function checkWin(){
    
  })();
  
  console.log(table.querySelectorAll('td'));
}


var ttt1 = new Ttt('some');
