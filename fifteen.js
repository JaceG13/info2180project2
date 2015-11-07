window.onload = function(){
	addClasses();
    layout();
    
    var s_button = $("shufflebutton");
    //$("shufflebutton").label = "Shuffle";
    //s_button.addEventListener("click",function(){resetGame();},false);
    s_button.addEventListener("click",function(){shuffle();},false);
    
    // var top = "300px";
    // var left = "300px";
    // var allPieces = $$(".puzzlepiece");
    
};

var y_correct = new Array();
var x_correct = new Array();
var y = "300px";
var x = "300px";

function addClasses(){
	var allPieces = $$("div#puzzlearea div");
	for (var i = 0; i < allPieces.length; i++){
		allPieces[i].addClassName("puzzlepiece");
        // console.log(allPieces[i].classList);
	}
};

function layout(){
    var allPieces = $$(".puzzlepiece");
    var l = 0;
    var t = 0;

    for(var i = 0; i < allPieces.length; i++){
        (function(){
            var pos = i;
            allPieces[pos].addEventListener("mouseover", function(){check(allPieces[pos])}, false);
            allPieces[pos].addEventListener("mouseleave", function(){uncheck(allPieces[pos])}, false);
            allPieces[pos].addEventListener("click", function(){move(allPieces[pos])}, false);
        }());
    }

    for(var i = 0; i < allPieces.length; i++){
        allPieces[i].style.left = (l*100) + "px";
        x_correct.push(allPieces[i].style.left);
        allPieces[i].style.top = (t*100) + "px";
        y_correct.push(allPieces[i].style.top);
        allPieces[i].style.backgroundPosition = "-" + (l*100) + "px -" + (t*100) + "px";
        if (l === 3){
            // allPieces[i].style.left = (l*100) + "px";
            // allPieces[i].style.top = (t*100) + "px";
            // allPieces[i].style.backgroundPosition = "-" + (l*100) + "px -" + (t*100) + "px";
            l = 0;
            t++;
        }else if(l < 3){
            // allPieces[i].style.left = (l*100) + "px";
            // allPieces[i].style.top = (t*100) + "px";
            l++;
        }
        // console.log(i + " left: " + allPieces[i].style.left + ", top: " + allPieces[i].style.top);
    }
    shuffle();
};

function check(piece){
    // console.log("Entered the check function.");
    // console.log(piece.style.left + " " + piece.style.top + " vs " + x + " " + y);
    if((piece.style.top === y && Math.abs(parseInt(piece.style.left, 10) - parseInt(x, 10)) === 100) || (piece.style.left === x && Math.abs(parseInt(piece.style.top, 10) - parseInt(y, 10)) === 100)){
        // console.log("Adding class.");
        piece.addClassName("movablepiece");
        return true;
    }else{
        return false;
    }
    

    // var allPieces = $$(".puzzlepiece");
    // for (var i = 0; i < allPieces.length; i++){
    //     if(allPieces[i].style.top === top){
    //         if(Math.abs(parseInt(allPieces[i].style.left) - parseInt(left)) === 100){
    //             allPieces[i].addClassName("movablepiece");
    //         }else{
    //             allPieces[i].removeClassName("movablepiece");
    //         }
    //     }else if(allPieces[i].style.left === left){
    //         if(Math.abs(parseInt(allPieces[i].style.top) - parseInt(top)) === 100){
    //             allPieces[i].addClassName("movablepiece");
    //         }else{
    //             allPieces[i].removeClassName("movablepiece");
    //         }
    //     }
    // }
};

function uncheck(piece){
    // console.log("Entered the uncheck function.");
    if (piece.classList.contains("movablepiece")){
        piece.removeClassName("movablepiece");
    }
}; 
    

function move(piece){
    // console.log("Entered the move function.");
    var x_temp = piece.style.left;
    var y_temp = piece.style.top;
    if(piece.classList.contains("movablepiece")){
        // console.log("Moving piece.")
        piece.style.left = x;
        piece.style.top = y;
        x = x_temp;
        y = y_temp;
    }
    victory();
};

function victory(){
    var allPieces = $$(".puzzlepiece");
    var correct = false;
    for (var i = 0; i < allPieces.length; i++){
        if(allPieces[i].style.left === x_correct[i] && allPieces[i].style.top === y_correct[i]){
            correct = true;
        }else{
            correct = false;
            break;
        }        
    }

    if(correct){
        // console.log("Puzzle solved.");
        $("puzzlearea").replace("Congratulations! You've solved it!");
        alert("Great Job!");
        setTimeout(reset, 2500);
        // location.reload();
    }
    // else{
    //             console.log("Puzzle not solved.");
    // }
};

function shuffle(){
    // console.log("Shuffling.");
    var allPieces = $$(".puzzlepiece");

    for(var i = 0; i < 500; i++){
        var choice = Math.floor(Math.random() * 15) + 0;
        if (check(allPieces[choice])){
            move(allPieces[choice]);
            uncheck(allPieces[choice]);
        }
    }
    
    // for(var i = 0; i < allPieces.length; i++){
    //     check(allPieces[i]);
    // }
    
    // choices = $$(".movablepiece");

    // for(var j = 0; j < 50; j++){
    //     move(allPieces[Math.floor(Math.random() * 15) + 0]);
    // }

    // console.log("Finished Shuffling.");
};

function reset(){
    alert("Setting up a new game...");
    location.reload();
}

// function resetGame(){
//     if ($("shufflebutton").label === "Restart Game"){
//         location.reload();   
//     }    
//     shuffle();
// };