import { createSlice } from "@reduxjs/toolkit";
import { words } from '../words';
import { maxNumberOfErrors } from '../components/Hangman'

const getInitialState = () => {
    // the word randomly chosen from dictionary TODO:
    const secretWord = words[23];

    return {
        secretWord: secretWord, // the word to guess
        lettersUsed: "", // letter user clicked
        numberOfErrors: 0, // number of letter user clicked that are missing in the the secretWord
        gameResult: "", // empty string when the game is not finished, "You won!", "You lost!"
    }
}

export const hangmanSlice = createSlice({
    name: "hangman",

    initialState: getInitialState(),

    reducers: {
        // restarts the game
        hangmanRestart: (state) => {
            state = getInitialState();
        },

        // change the state properties that depend on selected letter (action.payload)
        hangmanSelectLetter: (state, action) => {
            const letter = action.payload;
            // if such letter was used then there is no need to process
            if (!state.lettersUsed.includes(letter)) {
                state.lettersUsed += letter;  //add to the string of used letters  

                //evaluate gameResult and numberOfErrors
                if (state.secretWord.includes(letter)) {
                    // checking result
                    for (let index = 0; index < state.secretWord.length; index++) {
                        const currentSecretWordLetter = state.secretWord[index];
                        //each letter of secretWord should be in lettersUsed
                        if (!state.lettersUsed.includes(currentSecretWordLetter)) {
                            break; //not all letters found
                        }
                        if (index === state.secretWord.length) {
                            // the last letter of secretWord passed the test => the word is guessed 
                            state.gameResult = "You won!";
                        }
                    }
                } else {
                    // increment numberOfErrors
                    state.numberOfErrors += 1;
                    if (state.numberOfErrors === maxNumberOfErrors) {
                        state.gameResult = "You lost!";
                    }
                }

            }
        },



    },
});

export const { hangmanRestart, hangmanSelectLetter } = hangmanSlice.actions;

export default hangmanSlice.reducer;