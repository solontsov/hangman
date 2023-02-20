// Component Alphabet
import Letter from "./Letter";

function Alphabet() {
    const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return (
        <div id="alphabet">
            {/* Make array of Letter components */}
            {alphabetString.split("").map((a,i) => <Letter key={i} value={a} />)}
        </div>
    )
}

export default Alphabet;