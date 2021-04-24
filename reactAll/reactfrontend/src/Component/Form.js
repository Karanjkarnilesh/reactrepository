import React ,{Component} from 'react';

class Form  extends Component{

constructor(){
	super();
	this.state={
		username:"",
		password:"",
		posts:[]
	}
}

componentDidMount()
{
	fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => this.setState({posts:data}))
	

}

usernameHandler=(event)=>
{
	this.setState({username:event.target.value})
}

passwordHandler=(event)=>
{
	this.setState({password:event.target.value})
}


render(){
	const {posts}=this.state
	return(
		<div className="container">
		<input type="text" name="name" value={this.state.username} placeholder="Enter Your name"  onChange={this.usernameHandler} className="form-control"/>
		<input type="password" name="password" value={this.state.password} placeholder="Enter Your password" onChange={this.passwordHandler} className="form-control"/>
		<button className="btn btn-primary">Click Me</button>


	{/*{posts.map(post=><h1 key={post.id}>{post.title}</h1>)
		}*/}
		</div>

		)
}

}

export default Form;