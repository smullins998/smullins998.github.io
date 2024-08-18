
document.addEventListener('DOMContentLoaded', function () {
    const phrases = [
        "I am Sean.",
        "I am a Data Scientist.",
        "I am a Finance Expert.",
        'I am a Musician.'

        // Add more phrases here
    ];

    const textElement = document.getElementById('typing-text');

    let currentPhraseIndex = 0;
    let currentCharacterIndex = 0;

    function typePhrase() {
        const currentPhrase = phrases[currentPhraseIndex];
        const currentText = textElement.textContent;
        const currentCharacter = currentPhrase[currentCharacterIndex];

        if (currentCharacter === undefined) {
            // We've finished typing the current phrase, move to the next one.
            setTimeout(erasePhrase, 1000); // Wait for 1 second before erasing.
        } else {
            textElement.textContent = currentText + currentCharacter;
            currentCharacterIndex++;
            setTimeout(typePhrase, 100); // Adjust typing speed here (100 milliseconds).
        }
    }

    function erasePhrase() {
        const currentText = textElement.textContent;
        if (currentText.length === 0) {
            // We've finished erasing the current phrase, move to typing the next one.
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            currentCharacterIndex = 0; // Reset character index
            setTimeout(typePhrase, 1000); // Wait for 1 second before typing the next phrase.
        } else {
            textElement.textContent = currentText.slice(0, -1);
            setTimeout(erasePhrase, 50); // Adjust erasing speed here (50 milliseconds).
        }
    }

    // Start the typing animation.
    typePhrase();
});