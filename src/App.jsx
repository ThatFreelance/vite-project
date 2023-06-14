import { useState } from 'react'
import {puppyList} from './data.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log(featuredPup)
  
  


  return (
    <div className = "App">
    {puppies.map((puppy) => {
     return ( 
     <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
     
     );
})}  
{ featPupId && (
        <div id='Info'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      
</div>
);
}


export default App
