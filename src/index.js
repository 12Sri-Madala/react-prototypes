import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: 'Steve' ,
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(user),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor(Math.random() * 1000 + 1)
}

function greeting(user){
    return (<div className = 'container'>
        <h1>Welcome {user.name}! </h1>
        <h2 className = 'text-muted'>{user.luckyNumber}</h2>
        </div>
    )
    
    
}

