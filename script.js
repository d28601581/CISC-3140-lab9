document.getElementsByTagName("h1")[0].style.fontSize = "5";

var today = new Date();
document.getElementById("here").innerHTML = today;

function reveal(p){
  if(p == 1){
    document.getElementById("hiddenMessage").style.display = 'block';
  } if(p ==0){
    document.getElementById("hiddenMessage").style.display = 'none';
  }
}
