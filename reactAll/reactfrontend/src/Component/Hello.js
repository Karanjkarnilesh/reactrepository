import React from 'react';
import { Button } from 'react-bootstrap';

function Hello(props){
	function clickme()
	{
		alert("Button Is Clicked");
	}

	return(
<div >
	<h1>My name is : { props.name}</h1>
	<Button className="btn btn-success" onClick={clickme}>Click Me</Button>
</div>
);
}

export default Hello;