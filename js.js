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
    
  }
  
  table.addEventListener('click', function (e) {
    if (e.target == table) {
      return;
    }
    //var nowIndex =
    console.log(allCells.indexOf(e.target));
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
    //console.log(arrOfRezults);
    if (arrOfRezults.length > 5){
      testToWin();
    }
    console.log(fulCells);
  });
  
  
  
  
  
  console.log(allCells[0]);
}


var ttt1 = new Ttt('some');
