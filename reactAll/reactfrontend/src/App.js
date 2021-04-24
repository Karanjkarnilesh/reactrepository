import logo from './logo.svg';
import './App.css';
import Hello from './Component/Hello';
import FunComponent from './Component/FunComponent';
import MyClass from './Component/MyClass';
import Name from './Component/Name';
import Example from './Component/Example';
import Example2 from './Component/Example2';
import Form from './Component/Form';
import MyFragment from './Component/MyFragment';
function App() {


function clicked()
{
	alert("Click Button inside Class Component")
}

    return (<div className="container">
{/*    <Hello name="Nilesh"/>
        
        <MyClass email="karanjakr.nk@gmail.com" myClick={clicked}/>
        <Name/>
        <Example name={['python','java','Mysql','reactjs','html','css','javascript']}/>
        <Example2 name={['python','java','Mysql','reactjs','html','css','javascript','C#']}/>
		<Form/> */}
      
		<MyFragment/>        
        </div >

    );
}

export default App;