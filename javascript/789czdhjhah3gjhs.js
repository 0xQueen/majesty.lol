document.getElementById('encodeBtn').addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value;
    var encodedText = btoa(inputText);
    document.getElementById('outputText').value = encodedText;
});

document.getElementById('decodeBtn').addEventListener('click', function () {
    var encodedText = document.getElementById('inputText').value;
    var decodedText = atob(encodedText);
    document.getElementById('outputText').value = decodedText;
});

var howToToggle = document.getElementById('howToToggle');
var howToText = document.getElementById('howToText');

howToToggle.addEventListener('click', function () {
    if (howToText.style.maxHeight === '0px') {
        howToText.style.maxHeight = howToText.scrollHeight + 'px';
    } else {
        howToText.style.maxHeight = '0';
    }
});

