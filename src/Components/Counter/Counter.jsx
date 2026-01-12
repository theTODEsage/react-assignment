import React from 'react';

const Counter = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="mt-20 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="h-[250px] w-full md:w-[800px] flex flex-col justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg">
                <h2 className="text-xl font-semibold mb-2">In-Progress</h2>
                <span className="text-4xl font-bold">{inProgressCount}</span>
            </div>

            <div className="h-[250px] w-full md:w-[800px] flex flex-col justify-center items-center bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Resolved</h2>
                <span className="text-4xl font-bold">{resolvedCount}</span>
            </div>
        </div>
    );
};

export default Counter;