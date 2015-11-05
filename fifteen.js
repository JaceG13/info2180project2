window.onload = function(){
    setPieces();
    movable();
    $$("div#puzzlearea div.movablepiece").onclick = movePiece(0);
};

var allPieces;
var movablePieces;
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
};

var movable = function(){
    var pieces = allPieces;
    for (var j = 0; j < pieces.length; j++){
        pieces[j].addClassName("movablepiece");
    }
    movablePieces = $$("div#puzzlearea div.movablepiece");
};

var movePiece = function(pos){
    var pieces = allPieces;
    var temp = allPieces[pos].style.position;
    allPieces[pos].style.position = space;
    space = temp;
};

