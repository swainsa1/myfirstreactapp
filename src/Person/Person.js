import React from 'react';
const person = (props)=>{
    return <div className="App">
                <p>Name:{props.name}</p>
                <p>Age:{props.age}</p>
                <p>{props.children}</p>
            </div>    
}

export default person;