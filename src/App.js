import logo from './logo.svg';
import './App.css';
import Animal from './Animal'
import Human from './Human'

function App() {
  return (
    <div className="App">
      <h1>Animals</h1>
      <Animal animal="dog" name="Rigby"/>
      <Animal animal="cat" name="Garfield"/>
      <h1>Humans</h1>
      <Human name="Amir" location="Denver, CO"/>
    </div>
  );
}

export default App;
