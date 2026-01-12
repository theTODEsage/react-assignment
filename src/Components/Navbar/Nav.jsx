import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-20 gap-4 md:gap-0">

                <a href="" className="text-lg md:text-xl font-bold text-center md:text-left">
                    CS — Ticket System
                </a>

                <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center md:items-center w-full md:w-auto">
                    <a href="">Home</a>
                    <a href="">FAQ</a>
                    <a href="">Changelog</a>
                    <a href="">Blog</a>
                    <a href="">Home</a>
                    <a href="">Download</a>
                    <a href="">Contact</a>
                    <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-lg text-white w-full md:w-auto">
                        + New ticket
                    </button>
                </div>

            </div>
        </div>



    );
};

export default Nav;