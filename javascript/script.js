document.addEventListener("DOMContentLoaded", function () {
    // Your variables from the first part of the script
    var languageModal = document.getElementById('languageModal');

    if (languageModal) {
        languageModal.style.display = 'flex';

        function toggleNavBarVisibility(show) {
            var navBar = document.querySelector('.bottom-nav');
            navBar.style.display = show ? 'flex' : 'none';
        }

        document.querySelector('.loading-screen').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');

        // Check if the user has previously selected a language
        var savedLanguage = localStorage.getItem('selectedLanguage');

        if (savedLanguage) {
            // If a language is saved, directly show the corresponding content and the navigation bar
            handleLanguageSelection(savedLanguage);
            toggleNavBarVisibility(true);
        } else {
            // If no language is saved, show the language modal
            if (languageModal) {
                languageModal.style.display = 'flex';
            }
        }

        function handleLanguageSelection(language) {
            // Save the selected language in local storage
            localStorage.setItem('selectedLanguage', language);

            if (languageModal) {
                languageModal.style.display = 'none';
            }

            if (language === 'english') {
                $('#englishContent').fadeIn();
                $('#russianContent').fadeOut();
            } else if (language === 'russian') {
                $('#russianContent').fadeIn();
                $('#englishContent').fadeOut();
            }
        }

        $('#englishBtn').on('click', function () {
            handleLanguageSelection('english');
            toggleNavBarVisibility(true);
        });

        $('#russianBtn').on('click', function () {
            handleLanguageSelection('russian');
            toggleNavBarVisibility(true);
        });
    }

    // Your variables and functions from the second part of the script
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const encodeBtn = document.getElementById("encodeBtn");
    const decodeBtn = document.getElementById("decodeBtn");
    const copyBtn = document.getElementById("copyBtn");
    const copySuccess = document.getElementById("copySuccess");
    const howToToggle = document.getElementById('howToToggle');
    const howToText = document.getElementById('howToText');
    const copyOutputBtn = document.getElementById('copyOutputBtn');
    const copyOutputSuccess = document.getElementById('copyOutputSuccess');

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

    // Function to toggle howToText
    howToToggle.addEventListener('click', function () {
        howToText.style.maxHeight = (howToText.style.maxHeight === '0px') ? howToText.scrollHeight + 'px' : '0';
    });

    // Function to copy output text to clipboard
    copyOutputBtn.addEventListener('click', function () {
        outputText.select();
        document.execCommand('copy');
        document.getSelection().removeAllRanges();

        copyOutputSuccess.textContent = 'Copied!';
        copyOutputSuccess.classList.remove('hidden');
        setTimeout(() => {
            copyOutputSuccess.textContent = '';
            copyOutputSuccess.classList.add('hidden');
        }, 1500);
    });
});
