import React from 'react';
import { toast } from 'react-toastify';

const Ticket = ({ ticket, setSelectedTickets, selectedTickets }) => {

    const handleCard = (value) => {
        const isAlreadySelected = selectedTickets.some(t => t.number === value.number);

        if (!isAlreadySelected) {
            setSelectedTickets([...selectedTickets, value]);
            toast.info('In progress', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    return (
        <div>
            <div className="">
                <div
                    onClick={() => handleCard(ticket)}
                    className="border-2 bg-white border-gray-300 rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                >

                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{ticket.title}</h2>
                        <p className="text-gray-600 text-sm">
                            {ticket.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-between mt-4 text-gray-700 text-sm gap-4">
                        <div className="flex flex-col items-center">
                            <div className="text-gray-500 text-xs">Number</div>
                            <div className="font-semibold">{ticket.number}</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-gray-500 text-xs">Priority</div>
                            <div className="font-semibold">{ticket.priority}</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-gray-500 text-xs">Client</div>
                            <div className="font-semibold">{ticket.client}</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-gray-500 text-xs">Date</div>
                            <div className="font-semibold">{ticket.date}</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Ticket;