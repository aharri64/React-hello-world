import logo from './logo.svg';
import './App.css';
import Animal from './Animal'

function App() {
  return (
    <div className="App">
      <h1>Animals</h1>
      <Animal animal="dog" name="Rigby"/>
      <Animal animal="cat" name="Garfield"/>
      <Animal animal="tiger"/>
      <Animal animal="eagle"/>
      <Animal animal="lion"/>
    </div>
  );
}

export default App;
