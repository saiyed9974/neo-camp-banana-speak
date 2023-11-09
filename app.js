
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventhandler(){

    output.innerText = " sdfsfdf(banana) "+ txtInput.value; 

})

document.body.onload = addElement;
function addElement(){

    var newdiv = document.createElement("div");

    var newcontent = document.createTextNode("I love javascript");

    newdiv.appendChild(newcontent);

    var currenttag = document.getElementById("div1");

    document.body.insertBefore(newdiv,currenttag);

}