import './App.css';

import Hangman from './components/Hangman';
import Word from './components/Word';
import Alphabet from './components/Alphabet';
import Rules from './components/Rules';

import { words } from './words';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hangman game {words[23]}</h1>
        {/* TODO:  add button HELP, RESTART */}
        <Rules showRules={true}/>
        <Word />
        <Hangman />
        
        {/* depending on state show Alphabet or Win/Lost message TODO: */} 
        <Alphabet />
      </header>
    </div>
  );
}

export default App;
