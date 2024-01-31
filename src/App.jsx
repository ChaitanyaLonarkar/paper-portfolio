import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from '../components/Nav.jsx'
// import Section1 from '../components/section1.jsx'
import Section1 from '../components/section1.jsx'
import Section2 from '../components/section2.jsx'
import Section3 from '../components/section3.jsx'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      < Nav />
      < Section1/>
      < Section2/>
      < Section3/>


    </>
  )
}

export default App
