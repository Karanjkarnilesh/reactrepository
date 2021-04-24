import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';

export const MyContext = React.CreateContext()

function App() {
  return (
    <div className="Container">
    <MyContext.provider vlaue='this is a value'>
    <ComponentA/>    
    </MyContext.provider>
    </div>
  );
}

export default App;

