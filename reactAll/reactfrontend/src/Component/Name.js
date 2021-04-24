import React,{Component} from 'react';
import { Button } from 'react-bootstrap';

class Name extends Component{
constructor()
{
	super();
	this.state={
		name:"Nilesh"
	}
}
buttonClicked=()=>{
	// /alert("button has been Clicked");
	this.setState({
		// name:"pratik"
name:this.state.name ==="Nilesh" ? "pratik":"nilesh"
	});
}

render(){
	return(<div>
		<h1 className="text-black text-center">{this.state.name}</h1>
		<Button className="btn btn-success" onClick={this.buttonClicked}>Button Click</Button>
		</div>)
}

}

export default Name;