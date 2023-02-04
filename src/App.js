import './App.css'
import MainDash from './components/pages/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Performance from './components/performance';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        
      </div>
    </div>
  );
}

export default App;
