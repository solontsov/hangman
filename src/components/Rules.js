// Component that shows how to play Hangman game.

function Rules() {
    const rules = "Use the mouse to play the game. Try to guess the word hidden. Dashes represent letters of the word. Choose the alphabet letters below. Do your best to guess correctly or the funny stickman gets hanged.";

    return (
        <div>
            <h2>How to play Hangman game</h2>
            <p>{rules}</p>
        </div>
    )
}

export default Rules;