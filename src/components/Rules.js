// Component that shows how to play Hangman game.

function Rules(props) {
    //the component will be shown if props.showRules is true
    if (!props.showRules) {
        return null;
    }

    const rules = "Use the mouse to play the game. Try to guess the word hidden. Dashes represent letters of the word. Choose the alphabet letters below. Do your best to guess correctly or the funny stickman gets hanged.";

    return (
        <div style={{"width":"30%"}}>
            <h3>How to play Hangman game</h3>
            <p>{rules}</p>
        </div>
    )
}

export default Rules;