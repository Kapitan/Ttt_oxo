function Ttt(name) {
  
  var innerAdd = {
    x: '<span>x</span>',
    o: '<span>o</span>'
  };
  var now = innerAdd.x;
  var fulCells = {};
  var allCells = Array.prototype.slice.call(table.querySelectorAll('td'));
  
  function addToObj(nowIndex) {
    now == innerAdd.x ? fulCells[nowIndex] = ('x') : fulCells[nowIndex] = ('o');
  }
  
  function testToWin(){
    if (fulCells[0] == 'x' && fulCells[1] == 'x' && fulCells[2] == 'x' ||   //1 str
        fulCells[3] == 'x' && fulCells[4] == 'x' && fulCells[5] == 'x' ||   // 2 str
        fulCells[6] == 'x' && fulCells[7] == 'x' && fulCells[8] == 'x' ||    //3 str
        fulCells[0] == 'x' && fulCells[3] == 'x' && fulCells[6] == 'x' ||    // 1 col
        fulCells[1] == 'x' && fulCells[4] == 'x' && fulCells[7] == 'x' ||// 2 col
        fulCells[2] == 'x' && fulCells[5] == 'x' && fulCells[8] == 'x' ||// 3col
        fulCells[0] == 'x' && fulCells[4] == 'x' && fulCells[8] == 'x' ||
        fulCells[2] == 'x' && fulCells[4] == 'x' && fulCells[6] == 'x') {
      alert('win X');
    } else if (fulCells[0] == 'o' && fulCells[1] == 'o' && fulCells[2] == 'o' ||   //1 str
      fulCells[3] == 'o' && fulCells[4] == 'o' && fulCells[5] == 'o' ||   // 2 str
      fulCells[6] == 'o' && fulCells[7] == 'o' && fulCells[8] == 'o' ||    //3 str
      fulCells[0] == 'o' && fulCells[3] == 'o' && fulCells[6] == 'o' ||    // 1 col
      fulCells[1] == 'o' && fulCells[4] == 'o' && fulCells[7] == 'o' ||// 2 col
      fulCells[2] == 'o' && fulCells[5] == 'o' && fulCells[8] == 'o' ||// 3col
      fulCells[0] == 'o' && fulCells[4] == 'o' && fulCells[8] == 'o' ||
      fulCells[2] == 'o' && fulCells[4] == 'o' && fulCells[6] == 'o'){
      alert('win O');
    } else {
      //console.log(Object.keys(fulCells).length == 9);
      if (Object.keys(fulCells).length == 9){
        alert('friendship WINS');
      }
    }
  }
  
  table.addEventListener('click', function (e) {
    if (e.target == table) {
      return;
    }

    if (e.target.innerHTML == ''){
      e.target.innerHTML = now;
      addToObj(allCells.indexOf(e.target));
      if (now == innerAdd.x) {
        now = innerAdd.o;
      } else if (now ==innerAdd.o) {
        now = innerAdd.x;
      }
    }
    
    
    if (Object.keys(fulCells).length >= 5){
      testToWin();
    }
   
  });
  
  
  
  

}


var ttt1 = new Ttt('some');
