import React,{Component} from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component{
	constructor()
	{
		super();
		this.state={
			count:0
		}
	}
	clickMe=()=>{
		this.setState({count:this.state.count+1
		})
	}

	render(){
		return(<div>
<h2>{this.state.count}</h2>
				<Button className="btn btn-success" onClick={this.clickMe} > Click Me</Button>
			</div>)
	}
}

export default Counter;