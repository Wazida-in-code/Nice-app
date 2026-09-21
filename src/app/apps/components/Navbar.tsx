import Image from 'next/image';
import logo from "@/assets/logo.png"
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div className='bg-blue-100 py-5'>
                <nav className='w-11/12 mx-auto flex justify-between'>
                    <Image src={logo} alt='logo' width={60} height={60} />

                    <ul className='flex items-center gap-1'>
                        <li> <Link href="/" className="px-4 py-2 rounded-lg font-bold text-gray-700 hover:text-primary hover:bg-blue-200 transition-all duration-300" > Home </Link></li>
                        <li> <Link href="/apps" className="px-4 py-2 rounded-lg font-bold text-gray-700 hover:text-primary hover:bg-blue-200 transition-all duration-300" > Apps </Link> </li>
                        <li> <Link href="/installation" className="px-4 py-2 rounded-lg font-bold text-gray-700 hover:text-primary hover:bg-blue-200 transition-all duration-300" > Installation </Link> </li>
                    </ul>
                    <button className="px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"> Contribute </button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;