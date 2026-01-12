import './App.css'
import { useState } from 'react'
import Counter from './Components/Counter/Counter'
import Nav from './Components/Navbar/Nav'
import Tickets from './Components/Tickets/Tickets'

const fetchData = async() => {
  const res = await fetch('service.json')
  return res.json()
}
const promise = fetchData()

function App() {
  const [selectedTickets, setSelectedTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  return (
    <>
      <Nav></Nav>
      <Counter 
        inProgressCount={selectedTickets.length} 
        resolvedCount={resolvedTickets.length}
      />
      <Tickets 
        promise={promise}
        selectedTickets={selectedTickets}
        setSelectedTickets={setSelectedTickets}
        resolvedTickets={resolvedTickets}
        setResolvedTickets={setResolvedTickets}
      />
    </>
  )
}

export default App