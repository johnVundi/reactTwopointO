import React from 'react'

function Names() {
    const names = ["Maggy", "Fello", "Linda", "Dan"]
    
  return (
    <div>
        {names.map(name =>{
        return<li>
            {name}
        </li>
    })}
    </div>
  )
}

export default Names