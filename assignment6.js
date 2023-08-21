//let today = {
  //    todayDate:'09/08/2022',
    //  todayDay : 'Tuesday'
//};

//console.log(today);

//var myName = window.prompt("what's your  name?");
document.getElementById("myButton").onclick = function(){
    var myName = document.getElementById("myText").value;
    console.log("hello", myName);
}
//console.log("hello", myName);