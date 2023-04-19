import './App.css';
import { Navbar } from './Components/bharatComponent/nav';
import { AllRoutes } from './allroutes/Allroute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
