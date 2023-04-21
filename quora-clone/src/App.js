import './App.css';
import { Answer } from './NafisAns/Answer';
import { Navbar } from './Components/bharatComponent/nav';
import { AllRoutes } from './allroutes/Allroute';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      <Answer/>
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
