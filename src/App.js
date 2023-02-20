import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { hangmanRestart } from './store/hangman'

import Hangman from './components/Hangman';
import Word from './components/Word';
import Alphabet from './components/Alphabet';
import Rules from './components/Rules';


function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        {/* Heading */}
        <h1>Hangman game</h1>

        <Routes>
          {/* The rules describe which components will be visible based on routes/URLs */}
          <Route exact path="/" element={
            <>
              {/* button HELP and RESTART */}
              <nav>
                <menu>
                  <li><Link to="/rules"><button>HELP</button></Link></li>
                  <li><button onClick={() => dispatch(hangmanRestart())}>RESTART</button></li>
                </menu>
              </nav>
             
              {/* the secret word */}
              <Word />
              
              {/* Hangman image */}
              <Hangman />
              
              {/* depending on state show Alphabet or Win/Lost message TODO: */}
              <Alphabet />
            </>
          } />
          <Route exact path="/rules" element={<Rules />} />
        </Routes>


      </header>
    </div>
  );
}

export default App;
