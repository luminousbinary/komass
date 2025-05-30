"use client";
import Link from 'next/link';
import { useState } from 'react';
import { SearchModal } from './block/searchModal'; // Adjust the path as needed

const Navbar = () => {
        
    const [showModal, setShowModal] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-lg font-bold">
                    <Link href="/feed">
                        KOMASS
                    </Link>
                </div>
                <div className="flex space-x-4">
                    {/* <button 
                        onClick={() => setShowModal(true)} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Open Search
                    </button>
                    {showModal && <SearchModal />} */}
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;