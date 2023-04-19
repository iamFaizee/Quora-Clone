import './App.css';
import { AllRoutes } from './allroutes/Allroute';
import { Navbar } from './bharatComponent/nav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
