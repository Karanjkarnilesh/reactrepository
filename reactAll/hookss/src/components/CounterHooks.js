import React,{useState} from 'react';
import { Button,Inpu} from 'react-bootstrap';


function CounterHooks(){

const [count,setCount]=useState(0)
const [text,settext] =useState("this is text")
const [info,setinfo] =useState({name:'',email:''})

	return(<div className="container">
		<h2>{count}</h2>
		<Button onClick={()=>setCount(count+1)} class="btn btn-success">Cut Me</Button>
<h1>{text}</h1>
<Button onClick={()=>settext("this is set text")} class="btn btn-success">Cut</Button>
<br/>
<br/>
<input type="text"  onChange={e=>setinfo({...info, name:e.target.value})} name="name" className="form-control" value={info.name} placeholder="Username"/>
<input type="email" onChange={e=>setinfo({...info, email:e.target.value})} name="email" className="form-control" value={info.email} placeholder="Email"/>


<h1>Name is : {info.name}</h1>
<h1>Email is : {info.email }</h1>

		</div>)
		

}

export default CounterHooks;