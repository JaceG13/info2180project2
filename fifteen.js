window.onload = function(){
    setPieces();
};

//var space = "300px 300px";

/*  pieces[0].style.backgroundPosition = "0px 0px";
    pieces[1].style.backgroundPosition = "-100px 0px";
    pieces[2].style.backgroundPosition = "-200px 0px";
    pieces[3].style.backgroundPosition = "-300px 0px";
    pieces[4].style.backgroundPosition = "0px -100px";
    pieces[5].style.backgroundPosition = "-100px -100px";
    pieces[6].style.backgroundPosition = "-200px -100px";
    pieces[7].style.backgroundPosition = "-300px -100px";
    pieces[8].style.backgroundPosition = "0px -200px";
    pieces[9].style.backgroundPosition = "-100px -200px";
    pieces[10].style.backgroundPosition = "-200px -200px";
    pieces[11].style.backgroundPosition = "-300px -200px";
    pieces[12].style.backgroundPosition = "0px -300px";
    pieces[13].style.backgroundPosition = "-100px -300px";
    pieces[14].style.backgroundPosition = "-200px -300px";*/
    
    /*var x = 0;
    for (var t = 0; t > -300; t -= 100){
        for (var l = -300; l < 0; l += 100){
            pieces[x].style.backgroundPosition = "" + l + "px " + t + "px";
        }
    }
};*/
var pieces = $$("div#puzzlearea div");

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
            l = -1;
            t++;
        }
        
        l++;
        //check(pieces[i]);
        
        //console.log(pieces[i].style.left);
        //console.log(pieces[i].style.top);
        //console.log(pieces[i].style.backgroundPosition);
    }
    //var space = pieces[0];
    //space.removeClassName("puzzlepiece");
    //space.style.width = "100px";
    //space.style.height = "100px";
    //space.style.position = "300px 300px";
    //pieces.push(space);
    //shuffle();
};

var top = "300px";
var left = "300px";

var check = function(piece){
    if (piece.style.left == left || piece.style.top == top){
        piece.addClassName("movablepiece");
    }
}

