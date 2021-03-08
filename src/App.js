import './App.css';
import Chart from './components/Chart';
import Eventlog from './components/Eventlog';
import Graph from './components/Graph';
import Header from './components/Header';
import Holdings from './components/Holdings';
import Performance from './components/Performance';

function App() {
  return (
    <div className="App">
      <Header/>
      <Performance/>
      <Chart/>
      <Holdings/>
      <Graph/>
      <Eventlog/>
    </div>
  );
}

export default App;
