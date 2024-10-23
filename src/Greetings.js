import React from 'react'

function Greetings() {
    const isLoggedIn = false;

    if(isLoggedIn){
        return <h1>Welcome back</h1>;
    }else{
        return<h1> please sign in</h1>;
    }
//   return (
//     <div>Greetings</div>
//   )
}

export default Greetings