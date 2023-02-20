import { useSelector, useDispatch } from 'react-redux'
import { hangmanSelectLetter } from '../store/hangman'

function Letter(props) {

    const lettersUsed = useSelector(state => state.hangman.lettersUsed);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        //letter is in innerText of element
        const letter = e.target.innerText;
        dispatch(hangmanSelectLetter(letter));
    }

    return (
        <div onClick={handleClick} className={ lettersUsed.includes(props.value) ? 'used' : ''}>{props.value}</div>
    )
}

export default Letter;