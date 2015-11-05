window.onload = function(){
    setPieces();
    
    //var movablePieces = $$("div#puzzlearea div.movablepiece");
    //movablePieces.addEventListener("click", movePiece());
    
    for(var j = 0; j < allPieces.length; j++){
        var pos = j;
        if(allPieces[pos].classList.contains("movablepiece")){
            movablePieces.push(allPieces[j]);
        }
    }
    for(var k = 0; k < movablePieces.length; k++){
        console.log(movablePieces[k]);
        movablePieces[k].addEventListener("click", movePiece(movablePieces[k]));
    }
};

var allPieces;
var movablePieces;// = $$("div#puzzlearea div.movablepiece");

var space = "300px 300px";

var setPieces = function(){
    var l = 0;
    var t = 0;
    var pieces = $$("div#puzzlearea div");
    for (var i = 0; i < pieces.length; i++){
        pieces[i].addClassName("puzzlepiece");
        pieces[i].style.left = "" + (l*100) + "px";
        pieces[i].style.top = "" + (t*100) + "px";
        pieces[i].style.backgroundPosition = "-" + (l*100) + "px -" + (t*100) + "px";
        //pieces[i].addClassName("movablepiece");
        
        if (l == 3){
            l = 0;
            t++;
        }else{
            l++;            
        }
        
        //console.log(pieces[i].style.position);
        //console.log(pieces[i].style.top);
        //console.log(pieces[i].style.backgroundPosition);
    }
    allPieces = pieces;
    movable();
};

var spaceTop = "300px";
var spaceLeft = "300px";

var movable = function(){
    var pieces = allPieces;
    for (var j = 0; j < pieces.length; j++){
        if(pieces[j].style.top === spaceTop){
           if(Math.abs(parseInt(pieces[j].style.left, 10) - parseInt(spaceLeft, 10)) === 100){
               pieces[j].addClassName("movablepiece");
           }
        }
        
        if(pieces[j].style.left === spaceLeft){
            if(Math.abs(parseInt(pieces[j].style.top, 10) - parseInt(spaceTop, 10)) === 100){
                pieces[j].addClassName("movablepiece");
            }
        }
        //pieces[j].addClassName("movablepiece");
    }
    //movablePieces = $$("div#puzzlearea div.movablepiece");
    allPieces = pieces;
};

var movePiece = function(piece){
    
    var tempTop = piece.style.top;
    var tempLeft = piece.style.left;
    
    //if(piece.classList.contains("movablepiece")){
    piece.style.top = spaceTop;
    piece.style.left = spaceLeft;
    spaceTop = tempTop;
    spaceLeft = tempLeft;
    //}
    
    movable();
};

