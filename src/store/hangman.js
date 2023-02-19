import { createSlice } from "@reduxjs/toolkit";

export const hangmanSlice = createSlice({
    name: "hangman",

    initialState: {
        nextId: 3,
        data:
        {
            1: {
                content: 'Content 1',
                completed: false
            },
            2: {
                content: 'Content 2',
                completed: true
            }
        },
        editingId: 0, //if 0 editing form is closed, otherwise item with this id is being edited
    },

    reducers: {
        hangmanAdd: (state) => {
            state.editingId = state.nextId; //open form to enter new item    
        },

        // deletes item with specified id
        hangmanDelete: (state, action) => {
            delete state.data[action.payload]; 
        },

        hangmanCompleted: (state, action) => {
            //invert "completed" property
            state.data[action.payload].completed = !state.data[action.payload].completed;
        }, 

        //opens form for editing the item with specified id
        hangmanEdit: (state, action) => {
            state.editingId = action.payload;
        },
        
        // creates new item (editingId==nextId) or saves content of edited item (editingId!=nextId),
        // content is in action.payload
        hangmanSave: (state, action) => {
            if (state.nextId === state.editingId) {
                state.data[state.nextId] = {
                    content: action.payload,
                    completed: false
                };
                state.nextId += 1;
            } 
            else {
                state.data[state.editingId].content = action.payload;
            } 
            state.editingId = 0; //close form
        },
        // cancels editing
        hangmanCancel: (state) => {
            state.editingId = 0; //close form
        }

    },
});

export const {hangmanAdd, hangmanDelete, hangmanCompleted, hangmanEdit, hangmanSave, hangmanCancel} = hangmanSlice.actions;

export default hangmanSlice.reducer;