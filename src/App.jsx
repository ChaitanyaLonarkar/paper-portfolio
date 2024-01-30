import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from '../components/Nav.jsx'
// import Section1 from '../components/section1.jsx'
import Section1 from '../components/section1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Nav />
      < Section1/>
    </>
  )
}

export default App
