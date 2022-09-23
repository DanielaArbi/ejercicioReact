import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <User 
      nombre = "Daniela"
      activo = {true}/>
    </div>
  );
}

export default App;
