import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
     <div className="flex gap-4 p-10">
      <Card
        title="React JS"
        description="A JavaScript library for building user interfaces."
      />

      <Card
        title="Simple Text"
        description="This card doesn't have an image prop passed."
      />
    </div>

  )
}

export default App
