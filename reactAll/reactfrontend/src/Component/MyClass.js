import React,{Component} from 'react';
import { Button } from 'react-bootstrap';

class MyClass extends Component{


	render(){
		return(<div >
			<h1 className="bg-primary text-white text-center">My Email is :  {this.props.email}</h1>
<Button className="btn btn-primary" onClick={this.props.myClick}>Click Me</Button>
			</div>)
	}
}

export default MyClass;