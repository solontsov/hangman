// Component - Hidden word
import { useSelector } from 'react-redux'

function Word() {
    const lettersUsed = useSelector(state => state.hangman.lettersUsed);
    const secretWord = useSelector(state => state.hangman.secretWord);

    // create array filled with "_"
    let presentationArray = Array(secretWord.length).fill('_');

    // replace "_" with guessed letters
    for (let index = 0; index < secretWord.length; index++) {
        const currentSecretWordLetter = secretWord[index];
        if (lettersUsed.includes(currentSecretWordLetter)) {
            presentationArray[index] = currentSecretWordLetter;
        }
    }

    return (
        <div id="word">
            {/* put each element (letter) from presentationArray to separate div */}
            {presentationArray.map((a, i) => <div key={i}>{a}</div>)}
        </div>
    )
}

export default Word;