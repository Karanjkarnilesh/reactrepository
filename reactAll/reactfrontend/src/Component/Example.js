import React from 'react';

function Example(props){

function myElement(names){
	return names.map(name=>
		<div key={name}>
	{`${name}`}
	</div>
	)

}	

	return(<div>
		{
			myElement(props.name)
		}

		</div>
		);
}

export default Example;