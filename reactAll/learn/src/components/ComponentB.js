import React from 'react';
import {MyContext} from '../App';
function ComponentB(){
	return(<div>

		<MyContext.Consumer>
		{
			data =>{
				return <h1>{data}</h2>
			}
		}
		<MyContext.Consumer/>
		</div>)
}

export default ComponentB;