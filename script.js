let lefteyestate = false;
function go(){
    let text = document.getElementById("textbox").value;
    lefteyestate = !lefteyestate;
    if(lefteyestate){
        document.getElementById("lefteye").innerHTML = text;
        document.getElementById("lefteye").style.fontSize = "40";
    }
    else{
        document.getElementById("lefteye").innerHTML = "O";
        document.getElementById("lefteye").style.fontSize = "50";

    }
}

