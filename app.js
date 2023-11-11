
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");
var serverurl = "https://api.funtranslations.com/translate/minion.json"


function constructURL(text) {

    return serverurl +"?"+ "text="+ text

}

function errorHandler(error){
console.log("error occured ",error);

}

btnTranslate.addEventListener("click", function clickEventhandler(){
    var inputText = txtInput.value;
fetch(constructURL(inputText))
.then(response=>response.json())
.then(json=>{var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
                })
.catch(errorHandler);

})










