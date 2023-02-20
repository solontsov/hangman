import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import Hangman from './components/Hangman';
import Word from './components/Word';
import Alphabet from './components/Alphabet';
import Rules from './components/Rules';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Heading */}
        <h1>Hangman game</h1>

        {/* button HELP and RESTART */}
        <nav>
          <menu>
            <Routes>
              <Route exact path="/" element={<li><Link to="/rules"><button>HELP</button></Link></li>} />
              <Route exact path="/rules" element={null} />
            </Routes>
            <li><Link to="/"><button>RESTART</button></Link></li>
          </menu>
        </nav>
        <Routes>
          {/* The rules describe which components will be visible based on routes/URLs */}
          <Route exact path="/" element={
            <>
              <Word />
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
