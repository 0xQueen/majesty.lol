document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const encodeBtn = document.getElementById("encodeBtn");
    const decodeBtn = document.getElementById("decodeBtn");
    const copyBtn = document.getElementById("copyBtn");
    const copySuccess = document.getElementById("copySuccess");

    // Function to encode
    function encodeText() {
        const input = inputText.value;
        const encodedText = btoa(input);
        outputText.value = encodedText;
    }

    // Function to decode
    function decodeText() {
        const input = inputText.value;
        try {
            const decodedText = atob(input);
            outputText.value = decodedText;
        } catch (error) {
            outputText.value = "Invalid Base64 input!";
        }
    }

    // Function to copy to clipboard [Fix for mobile devices]
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
