
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Aresedition from './Pages/Aresedition';
import Aresnft from './Pages/Aresnft';
import Aresinvestment from './Pages/Aresinvestment';
import Aresabout from './Pages/Aresabout';

function App() {

  return (
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<div className='App'><Home /></div>} />
              <Route path="/aresedition" element={<div className='App'><Aresedition/></div>} />
              <Route path="/aresnft" element={<div className='App'><Aresnft/></div>} />
              <Route path="/aresinvestment" element={<div className='App'><Aresinvestment/></div>} />
              <Route path="/aresabout" element={<div className='App'><Aresabout/></div>} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;
