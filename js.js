function Ttt(name) {
  
  var innerAdd = {
    x: '<span>x</span>',
    o: '<span>o</span>'
  };
  var now = innerAdd.x;
  var fulCells = {};
  var allCells = Array.prototype.slice.call(table.querySelectorAll('td'));
  var arrOfRezults = [];
  
  function addToarr(){
    now == innerAdd.x ? arrOfRezults.push('x') : arrOfRezults.push('o');
  }
  
  function addToObj(nowIndex) {
    now == innerAdd.x ? fulCells[nowIndex] = ('x') : fulCells[nowIndex] = ('o');
  }
  
  function testToWin(){
    if (fulCells[0] == 'x' && fulCells[1] == 'x' && fulCells[2] == 'x') {
      alert('win X');
    }
  }
  
  table.addEventListener('click', function (e) {
    if (e.target == table) {
      return;
    }

    if (e.target.innerHTML == ''){
      e.target.innerHTML = now;
      addToarr();
      addToObj(allCells.indexOf(e.target));
    }
    
    if (now == innerAdd.x) {
      now = innerAdd.o;
    } else if (now ==innerAdd.o) {
      now = innerAdd.x;
    }
   // console.log(fulCells[0] == 'x', '123');
    if (Object.keys(fulCells).length >= 5){
      testToWin();
    }
   
  });
  
  
  
  

}


var ttt1 = new Ttt('some');
