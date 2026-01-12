
import './App.css'
import Counter from './Components/Counter/Counter'
import Nav from './Components/Navbar/Nav'
import Tickets from './Components/Tickets/Tickets'

const fetchData = async() =>{
  const res = await fetch('service.json')
  return res.json()
}
const promise = fetchData()

function App() {

  return (
    <>
      <Nav></Nav>
      <Counter></Counter>
      <Tickets promise={promise} ></Tickets>
    </>
  )
}

export default App
