
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventhandler(){

    output.innerText = " sdfsfdf(banana) "+ txtInput.value; 

})

document.body.onload = dynamicElement
function dynamicElement(){

    var newEle = document.createElement("div");
    var newcont = document.createTextNode("I love NodeJS");

    newEle.appendChild(newcont);

    var currentEle = document.getElementById("div1");

    document.body.insertBefore(newEle,currentEle);


}