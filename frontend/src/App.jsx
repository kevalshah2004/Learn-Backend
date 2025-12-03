import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/jokes')
    .then((response)=>{
      setJokes(response.data)
    }
    ).catch((error) => {
      console.log(error)
    }
    )
  })
  return (
    <>
      <h1>Jokes</h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key = {joke.id}>
            <h3>{joke.joke}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
