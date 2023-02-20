// Component - Hangman picture
import img1 from '../images/state1.gif';
import img2 from '../images/state2.gif';
import img3 from '../images/state3.gif';
import img4 from '../images/state4.gif';
import img5 from '../images/state5.gif';
import img6 from '../images/state6.gif';
import img7 from '../images/state7.gif';
import img8 from '../images/state8.gif';
import img9 from '../images/state9.gif';
import img10 from '../images/state10.gif';
import img11 from '../images/state11.gif';

// Array of images
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
export const maxNumberOfErrors = images.length - 1; //

function Hangman(){
    return (
        <img src={images[5]} alt="Hangman" />
    )
}

export default Hangman;