document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const encodeBtn = document.getElementById("encodeBtn");
    const decodeBtn = document.getElementById("decodeBtn");
    const copyBtn = document.getElementById("copyBtn");
    const copySuccess = document.getElementById("copySuccess");

    // Function to encode text
    function encodeText() {
        const input = inputText.value;
        const encodedText = btoa(input);
        outputText.value = encodedText;
    }

    // Function to decode text
    function decodeText() {
        const input = inputText.value;
        try {
            const decodedText = atob(input);
            outputText.value = decodedText;
        } catch (error) {
            outputText.value = "Invalid Base64 input!";
        }
    }

    // Function to copy to clipboard
    function copyToClipboard() {
        outputText.select();
        document.execCommand("copy");
        copySuccess.classList.remove("hidden");
        setTimeout(() => {
            copySuccess.classList.add("hidden");
        }, 1500);
    }

    encodeBtn.addEventListener("click", encodeText);
    decodeBtn.addEventListener("click", decodeText);
    copyBtn.addEventListener("click", copyToClipboard);
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

document.getElementById('copyOutputBtn').addEventListener('click', function () {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();

    const copyOutputSuccess = document.getElementById('copyOutputSuccess');
    copyOutputSuccess.textContent = 'Copied!';
    copyOutputSuccess.classList.remove('hidden');
    setTimeout(() => {
        copyOutputSuccess.textContent = '';
        copyOutputSuccess.classList.add('hidden');
    }, 1500);
});