var realAns1 = 546.6;
function checkAns1() {
    if (!answer1.disabled) {
        answer1.disabled = true;
        document.getElementById("verdict1").innerHTML = "If you see this, an error occured";
        document.getElementById("check1").innerHTML = "Retry";
        
        const userAns1 = Number(answer1.value);
        if (Math.abs(realAns1-userAns1) <= 0.012*realAns1) {
            document.getElementById("verdict1").innerHTML = "Correct!";
            document.getElementById("verdict1").style.display = "inline";
        }
        else {
            document.getElementById("verdict1").innerHTML = "Wrong. Please try again";
            document.getElementById("verdict1").style.display = "inline";
        }
    }
    else {
        answer1.disabled = false;
        document.getElementById("check1").innerHTML = "Check";
        document.getElementById("verdict1").style.display = "none";
    }
}
var isHidden1 = false;
function viewSol1() {
    if (!isHidden1) {
        isHidden1 = true
        document.getElementById("view1").innerHTML = "Hide Solution";
        document.getElementById("solution1").style.display="block";
    }
    else {
        isHidden1 = false
        document.getElementById("view1").innerHTML = "View Solution"
        document.getElementById("solution1").style.display = "none";
    }
}
function check2() {
    document.getElementById("verdict2").style.display = "inline";
}