import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ promise }) => {

    const ticketList = use(promise)

    return (
        <div className='px-20 flex items-center justify-between'>
            <div>
                <h2>Customer Tickets</h2>

                {
                    ticketList.map((ticket, index)=> <Ticket key={index} ticket={ticket}></Ticket>)
                }


            </div>
            <div>
                <h2>Task status</h2>
            </div>
        </div>
    );
};

export default Tickets;