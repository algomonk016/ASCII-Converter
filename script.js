function convert() {
    if(document.getElementById('toText').checked == true) convertToText();
    else convertToAscii();
}

function convertToText() {
    let textToConvert = document.getElementById('inputText').value;
    let obj = textToConvert.split(" ");
    let textToPrint = "";
    for(let i=0; i<obj.length; i++)
        textToPrint += String.fromCharCode(obj[i]);
    // console.log(textToPrint);

    document.getElementById('outputText').innerHTML = textToPrint;
}
function convertToAscii() {
    let textToConvert = document.getElementById('inputText').value;
    // console.log(textToConvert);
    let textToPrint = "";
    for(let i=0; i<textToConvert.length; i++) {
        textToPrint += textToConvert.charCodeAt(i);
        textToPrint+= " ";
    }
    // console.log(textToPrint);
    document.getElementById('outputText').innerHTML = textToPrint;
}