//Done add diagonal
//Done add erase which keeps ink position
// Done keyboard
// make desighn more flexible
var totalRows = 100;//20;
var totalCells = 100;//40;
var selectedCell;
createDrawingArea(totalRows, totalCells);
var selectedCellNumber=1;//((totalRows-1)*totalCells)+1;
var startingId= "cell"+(selectedCellNumber);
$("#"+startingId+"").addClass("starting");

function createDrawingArea(totalRows, totalCells) {
  //while less than number of rows, add number of cells to first row, append the row, repeat.
  var cellNumber = 0;
  var rowNumber = 1;
var row;
  
  row = $("<div class='row' id='row" + rowNumber + "'></div>");
  
  
    while (cellNumber<totalRows*totalCells) {
       row.appendTo($("#drawing-area")); 
      cellNumber++;
     
      var cell = $("<div class='cell' id='cell" + cellNumber + "'></div>"); //incrementally name cells
     // row.append(cell);
      cell.appendTo(row);

      
      if(cellNumber%totalCells==0){
    row.appendTo($("#drawing-area"));  //append row before moving on  
         rowNumber++;
        row = $("<div class='row' id='row" + rowNumber + "'></div>");
         }   
        //incrementally name rows when end of cells per row
 
 
  }
  }

function drawing(direction){
  
  $("#"+startingId+"").removeClass("starting");
   $("#"+selectedCell).removeClass("starting"); 
  if (direction=="up"){
  if((selectedCellNumber-totalCells)>0){
   selectedCellNumber-=totalCells;
  
  }
  }
    
    
  if(direction=="down"){
   
  if(selectedCellNumber+totalCells<=(totalRows*totalCells)){
   selectedCellNumber+=totalCells;
   
    }
  };

 if(direction=="left"){
   if(selectedCellNumber%totalCells!=1){
   selectedCellNumber--;
   
   }
  };
  if(direction=="right"){
    if(selectedCellNumber%totalCells!=0){
   selectedCellNumber++;
    
    }
  };
    if(direction== "downRight"){
   if( selectedCellNumber+totalCells<=(totalRows*totalCells) && selectedCellNumber%totalCells != 0){
     
    selectedCellNumber=selectedCellNumber+totalCells+1;
   }
   }  
  if(direction== "upLeft"){
     if(selectedCellNumber%totalCells !=1 && selectedCellNumber-totalCells > 0){
   selectedCellNumber= selectedCellNumber-totalCells-1;
   
    }
  }
  if(direction== "upRight"){
     if(selectedCellNumber%totalCells != 0 && selectedCellNumber-totalCells > 0){
  
     selectedCellNumber = selectedCellNumber-totalCells+1;
 
    }
  }
  if(direction== "downLeft"){
     if(selectedCellNumber%totalCells != 1 && selectedCellNumber > 0){
    selectedCellNumber= selectedCellNumber+totalCells-1;
    }
  }
    selectedCell= "cell"+ selectedCellNumber; 
$("#"+selectedCell).addClass("grey");
  }

function erase(){
  if(confirm("Are you sure you want to erase everything?")){
  $(".cell").removeClass("grey");
  }
 $("#"+selectedCell).addClass("starting"); 
  
}

$(".erase").on("click",erase);
 $(document).keydown(function(e) { if (e.keyCode == 27)
  erase();
                                });
                  
$("#up").click(function(){
                 drawing("up");
  });
$(document).keydown(function(e) { if (e.keyCode == 38 || e.keyCode == 104)//arrow or num 8
  drawing("up")
                                });

$("#down").click(function(){
                 drawing("down");
  });
$(document).keydown(function(e) { if (e.keyCode == 40|| e.keyCode == 98)//arrow or Num 2
  drawing("down");
                                   });

$("#left").click(function(){
                 drawing("left");
  });
$(document).keydown(function(e) { if (e.keyCode == 37|| e.keyCode == 100)//arrow or Num 4
  drawing("left")
                                });

$("#right").click(function(){
                 drawing("right");
  });
$(document).keydown(function(e) { if (e.keyCode == 39 || e.keyCode == 102)//arrow or Num 6
  drawing("right")
                                });


$("#up-left").click(function(){
                 drawing("upLeft");
  });
//Change key
$(document).keydown(function(e) { if (e.keyCode == 103 || e.keyCode == 81) //num7 or Q
  drawing("upLeft")
                                });

$("#up-right").click(function(){
                 drawing("upRight");
  });
$(document).keydown(function(e) { if (e.keyCode == 105 || e.keyCode == 80 )//num 9 or P
  drawing("upRight")
                                });



$("#down-left").click(function(){
                 drawing("downLeft");
  });

$(document).keydown(function(e) { if (e.keyCode == 78 || e.keyCode == 97)// num1 or Z
  drawing("downLeft")
                                });

$("#down-right").click(function(){
                 drawing("downRight");
  });

$(document).keydown(function(e) { if (e.keyCode == 77 ||  e.keyCode == 99)// num 3 or M
  drawing("downRight");
                                });

/*
$("#up-left").click(function(){
  drawing(down-left);
}
                      $("#up-right").click(function(){
  drawing(down-left);
}
                                            $("#down-left").click(function(){
  drawing(down-left);
}
$("#down-right").click(function(){
  drawing(down-left);
}*/
/*
up
down
left
right
up-left
up-right
down-left
down-right
*/
//}
//}