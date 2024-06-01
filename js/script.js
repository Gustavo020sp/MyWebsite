document.getElementById('togglebutton').addEventListener('click', function () {
    var portugueseContent = document.querySelectorAll('.portuguese');
    var englishContent = document.querySelectorAll('.english');

    // Check the current state and toggle the visibility
    if (portugueseContent[0].style.display === 'none') {
        for (var i = 0; i < portugueseContent.length; i++) {
            portugueseContent[i].style.display = 'block';
            englishContent[i].style.display = 'none';
        }
        this.textContent = 'Translate to English';
    } else {
        for (var i = 0; i < portugueseContent.length; i++) {
            portugueseContent[i].style.display = 'none';
            englishContent[i].style.display = 'block';
        }
        this.textContent = 'Traduzir para Português';
    }
});