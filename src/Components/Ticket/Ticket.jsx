import React from 'react';

const Ticket = ({ ticket, setSelectedTickets, selectedTickets }) => {

    const handleCard = (value) => {
        const isAlreadySelected = selectedTickets.some(t => t.number === value.number);
        
        if (!isAlreadySelected) {
            setSelectedTickets([...selectedTickets, value]);
        }
    }

    const isSelected = selectedTickets.some(t => t.number === ticket.number);

    return (
        <div>
            <div className="">
                <div 
                    onClick={() => handleCard(ticket)} 
                    className={`border-2 bg-white rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer ${
                        isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'
                    }`}
                >

                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{ticket.title}</h2>
                        <p className="text-gray-600 text-sm">
                            {ticket.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-between mt-4 text-gray-700 text-sm gap-4">
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 text-xs">Number</span>
                            <span className="font-semibold">{ticket.number}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 text-xs">Priority</span>
                            <span className="font-semibold">{ticket.priority}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 text-xs">Client</span>
                            <span className="font-semibold">{ticket.client}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 text-xs">Date</span>
                            <span className="font-semibold">{ticket.date}</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Ticket;