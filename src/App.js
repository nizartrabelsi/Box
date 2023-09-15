import logo from './logo.svg';
import './App.css';
import Routesss from './Routess/Routesss';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routesss/>
      </BrowserRouter>
    </div>
  );
}

export default App;
