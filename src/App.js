import logo from './logo.svg';
import './App.css';

function App() {
  const die1 = Math.floor((Math.random()*20)+1);
  const die2 = Math.floor((Math.random()*20)+1);
  return (
    <div className="App">
      <h2>You rolled a {die1}</h2>
      <h2>Your opponent rolled a {die2}</h2>
    </div>
  );
}

export default App;
