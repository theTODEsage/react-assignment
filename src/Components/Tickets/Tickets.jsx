
// import React, { use } from 'react';
// import Ticket from '../Ticket/Ticket';

// const Tickets = ({ promise, selectedTickets, setSelectedTickets, resolvedTickets, setResolvedTickets }) => {

//     const ticketList = use(promise)

//     const handleComplete = (ticket) => {
    
//         setSelectedTickets(selectedTickets.filter(t => t.number !== ticket.number))
//         setResolvedTickets([...resolvedTickets, ticket])
//     }

//     return (
//         <div className="px-20 flex gap-6 mt-20">
//             <div className="flex-1">
//                 <h2 className="text-xl font-bold">Customer Tickets</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {ticketList.map((ticket, index) => (
//                         <Ticket 
//                             key={index} 
//                             setSelectedTickets={setSelectedTickets} 
//                             selectedTickets={selectedTickets} 
//                             ticket={ticket} 
//                         />
//                     ))}
//                 </div>
//             </div>

//             <div className="w-80">
//                 {/* Task Status Section */}
//                 <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-4">Task status</h2>
//                     {selectedTickets.length === 0 ? (
//                         <div className="bg-white p-5 text-center text-gray-500">
//                             Select a ticket to add to Task Status
//                         </div>
//                     ) : (
//                         <div className="space-y-3">
//                             {selectedTickets.map((ticket, index) => (
//                                 <div key={index} className="bg-white p-4 rounded-lg shadow">
//                                     <h3 className='mb-3 font-semibold text-gray-800'>{ticket.title}</h3>
//                                     <button 
//                                         onClick={() => handleComplete(ticket)}
//                                         className="btn w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//                                     >
//                                         Complete
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>



//                 <div>
//                     <h2 className="text-xl font-bold mb-4">Resolved Tasks</h2>
//                     {resolvedTickets.length === 0 ? (
//                         <div className="bg-gray-100 p-5 text-center text-gray-500">
//                             No resolved tasks yet
//                         </div>
//                     ) : (
//                         <div className="space-y-2">
//                             {resolvedTickets.map((ticket, index) => (
//                                 <div key={index} className="bg-green-50 border border-green-200 p-3 rounded-lg">
//                                     <h3 className='font-semibold text-green-800 flex items-center'>
//                                         <span className="mr-2">✓</span>
//                                         {ticket.title}
//                                     </h3>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Tickets;

import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ promise, selectedTickets, setSelectedTickets, resolvedTickets, setResolvedTickets }) => {

    const ticketList = use(promise)

    const handleComplete = (ticket) => {
        setSelectedTickets(selectedTickets.filter(t => t.number !== ticket.number))
        setResolvedTickets([...resolvedTickets, ticket])
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
                {/* Task Status Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Task status</h2>
                    {selectedTickets.length === 0 ? (
                        <div className="bg-white p-5 text-center text-gray-500">
                            Select a ticket to add to Task Status
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {selectedTickets.map((ticket, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow">
                                    <h3 className='mb-3 font-semibold text-gray-800'>{ticket.title}</h3>
                                    <button 
                                        onClick={() => handleComplete(ticket)}
                                        className="btn w-full bg-green-400 text-white py-2 rounded hover:bg-green-500 transition"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Resolved Tasks</h2>
                    {resolvedTickets.length === 0 ? (
                        <div className="bg-gray-100 p-5 text-center text-gray-500">
                            No resolved tasks yet
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {resolvedTickets.map((ticket, index) => (
                                <div key={index} className="bg-green-50 border border-green-200 p-3 rounded-lg">
                                    <h3 className='font-semibold text-green-800'>
                                        {ticket.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tickets;