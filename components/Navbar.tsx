import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-lg font-bold">
                    <Link href="/feed">
                        KOMASS
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/about" className="hover:text-gray-400">
                       About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;