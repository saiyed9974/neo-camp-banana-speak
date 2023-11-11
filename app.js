
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

function constructURL(text) {

    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="+text // some probleme in minion api so I put this one

}

function errorHandler(error){
console.log("error occured ",error);

}

btnTranslate.addEventListener("click", function clickEventhandler(){
fetch(constructURL(txtInput))
.then(response=>response.json())
.then(json=>{ var translatedtext = json.contents.translated;
                outputText.innerText = translatedtext; })
.catch(errorHandler)

})









/** create dynamic element */

/**document.body.onload = dynamicElement
function dynamicElement(){

    var newEle = document.createElement("div");
    var newcont = document.createTextNode("I love NodeJS");

    newEle.appendChild(newcont);

    var currentEle = document.getElementById("div1");

    document.body.insertBefore(newEle,currentEle);


} **/

