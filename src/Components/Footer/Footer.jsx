import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-20">
            <div className="px-4 md:px-20 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-xl font-bold mb-4">CS — Ticket System</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm">About Us</li>
                            <li className="text-gray-400 text-sm">Our Mission</li>
                            <li className="text-gray-400 text-sm">Contact Saled</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm">Products & Services</li>
                            <li className="text-gray-400 text-sm">Customer Stories</li>
                            <li className="text-gray-400 text-sm">Download Apps</li>
                        </ul>
                    </div>




                    <div>
                        <h3 className="text-lg font-semibold mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm">Privacy Policy</li>
                            <li className="text-gray-400 text-sm">Terms & Conditions</li>
                            <li className="text-gray-400 text-sm">Join Us</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm flex items-center">
                                <span className="mr-2">x</span> @CS — Ticket System
                            </li>
                            <li className="text-gray-400 text-sm flex items-center">
                                <span className="mr-2">in</span> @CS — Ticket System
                            </li>
                            <li className="text-gray-400 text-sm flex items-center">
                                <span className="mr-2">f</span> @CS — Ticket System
                            </li>
                            <li className="text-gray-400 text-sm flex items-center">
                                <span className="mr-2">Mail :</span> support@cst.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 py-6">
                <p className="text-center text-gray-400 text-sm">
                    © 2025 CS — Ticket System. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;