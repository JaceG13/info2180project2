var space = "300";
var top = 0;
var left = 0;
var pieces = $$("div#puzzlearea div");

window.onload = function(){
    setPieces();
};

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

var setPieces = function(){
    for (var i = 0; i < pieces.length; i++){
        pieces[i].addClassName("puzzlepiece");
        
        /*do{
            do{
                pieces[i].style.position = "" + left + "px " + top + " px";
                left += 100;
            }while(left <= 300);
        }while(top <=300);*/
        
        if(left <= 300){
            pieces[i].style.position = "" + left + "px " + top + " px";
        }else{
            left = 0;
            top += 100;
            pieces[i].style.position = "" + left + "px " + top + " px";
        }
        
        left += 100;
    }
    //shuffle();
};