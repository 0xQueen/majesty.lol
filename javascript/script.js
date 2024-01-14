var languageModal = document.getElementById('languageModal');

if (languageModal) {
    languageModal.style.display = 'flex';

    function toggleNavBarVisibility(show) {
        var navBar = document.querySelector('.bottom-nav');
        navBar.style.display = show ? 'flex' : 'none';
    }

    setTimeout(function () {
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

    }, 0);
}
