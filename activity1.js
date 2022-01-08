score=0

 function abc() { 

    score=score+1;
    document.getElementById("score").innerHTML=score;

}

function def() { 

    localStorage.setItem("score",score);

}

function ghi() { 

window.location="sp.HTML";

}