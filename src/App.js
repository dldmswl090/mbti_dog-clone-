import './App.css';
import Homepage from './Pages/Homepage';
import Questionpage from './Pages/Questionpage';
import Resultpage from './Pages/Resultpage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Questionpage" element={<Questionpage/>}/>
      <Route path="/Resultpage" element={<Resultpage/>}/>
    </Routes>
   
  );
}

export default App;
