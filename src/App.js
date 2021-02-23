import Animal from './Animal'
import Human from './Human'
import Car from './Car'

function App() {
  return (
    <div className="App">
      <h1>Animals</h1>
      <Animal animal="dog" name="Rigby"/>
      <Animal animal="cat" name="Garfield"/>
      <h1>Humans</h1>
      <Human name="Amir" location="Denver, CO"/>
      <Car />
    </div>
  );
}

export default App;
