import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
function App() {
  return (
    <div className="container">
      <Counter/>
      <CounterHooks/>
    </div>
  );
}

export default App;
