document.getElementById('languageModal').style.display = 'flex';
    
function toggleNavBarVisibility(show) {
    var navBar = document.querySelector('.bottom-nav');
    navBar.style.display = show ? 'flex' : 'none';
}

setTimeout(function () {
    document.querySelector('.loading-screen').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');

    function handleLanguageSelection(language) {
        document.getElementById('languageModal').style.display = 'none';

        if (language === 'english') {
            $('#englishContent').fadeIn();
            $('#russianContent').fadeOut();
            toggleNavBarVisibility(true);
        } else if (language === 'russian') {
            $('#russianContent').fadeIn();
            $('#englishContent').fadeOut();
            toggleNavBarVisibility(true);
        }
    }

    toggleNavBarVisibility(false);

    $('#englishBtn').on('click', function () {
        handleLanguageSelection('english');
    });

    $('#russianBtn').on('click', function () {
        handleLanguageSelection('russian');
    });

}, 200);
