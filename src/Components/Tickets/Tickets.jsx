// import React, { use, useState } from 'react';
// import Ticket from '../Ticket/Ticket';

// const Tickets = ({ promise }) => {

//     const ticketList = use(promise)
//     const [selected, setSelected] = useState(null)

//     return (

//         <div className="px-20 flex gap-6 mt-20">
//             <div className="flex-1">
//                 <h2 className="text-xl font-bold">Customer Tickets</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {ticketList.map((ticket, index) => (
//                         <Ticket key={index} setSelected={setSelected} selected={selected} ticket={ticket} />
//                     ))}
//                 </div>
//             </div>

//             <div className="w-80">
//                 <h2 className="text-xl font-bold">Task status</h2>
//                 <div className="bg-white p-5 text-center">
//                     <h3 className='mb-2'>{}</h3>
//                     <button className="btn">Complete</button>
//                 </div>
//             </div>
//         </div>

//     );
// }


// export default Tickets;


import React, { use, useState } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ promise }) => {

    const ticketList = use(promise)
    const [selectedTickets, setSelectedTickets] = useState([])

    const handleComplete = (ticketNumber) => {
        setSelectedTickets(selectedTickets.filter(ticket => ticket.number !== ticketNumber))
    }

    return (

        <div className="px-20 flex gap-6 mt-20">
            <div className="flex-1">
                <h2 className="text-xl font-bold">Customer Tickets</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ticketList.map((ticket, index) => (
                        <Ticket 
                            key={index} 
                            setSelectedTickets={setSelectedTickets} 
                            selectedTickets={selectedTickets} 
                            ticket={ticket} 
                        />
                    ))}
                </div>
            </div>

            <div className="w-80">
                <h2 className="text-xl font-bold mb-4">Task status</h2>
                {selectedTickets.length === 0 ? (
                    <div className="bg-white p-5 text-center text-gray-500">
                        No tickets selected
                    </div>
                ) : (
                    <div className="space-y-3">
                        {selectedTickets.map((ticket, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow">
                                <h3 className='mb-3 font-semibold text-gray-800'>{ticket.title}</h3>
                                <button 
                                    onClick={() => handleComplete(ticket.number)}
                                    className="btn w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
}


export default Tickets;