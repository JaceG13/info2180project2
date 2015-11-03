window.onload = function(){
    var pieces = $$("div#puzzlearea div");
    for (var i = 0; i < pieces.length; i++){
        pieces[i].addClassName("puzzlepiece")
    }
};