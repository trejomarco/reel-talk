// Header.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import searchIcon from '/search-icon.svg';

const Header: React.FC = () => {
    return (
        <header
            className="fixed top-0 left-0 w-full h-[56px] bg-white flex justify-center items-center border-b border-gray-400"
            style={{ padding: '8px 0', borderBottomWidth: '1px' }}
        >

            <div className="flex items-center space-x-4">
                {/* Link component wrapping Image component for logo */}
                <Link href="/" passHref>
                    <Image src="/reel-talk-logo.png" alt="Reel Talk Logo" width={118} height={26} />
                </Link>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-4 mr-16">
                        <li>
                            <Link href="/browse" passHref>
                                <span className="hover:text-gray-500 cursor-pointer">Browse</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/community" passHref>
                                <span className="hover:text-gray-500 cursor-pointer">Community</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/discussions" passHref>
                                <span className="hover:text-gray-500 cursor-pointer">Discussions</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Search Box */}
                <div className="ml-4 relative">
                    {/* Icon */}
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Image src="/search-icon.svg" alt="Search" width={20} height={20} />
                    </div>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="mr-16 w-[351px] h-[34px] pl-10 pr-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-600"
                        style={{ backgroundColor: '#00000014', borderColor: '#00000014' }}
                    />


                </div>


                {/* Login and Signup Buttons */}
                <div className="flex items-center gap-2.5 ml-2">
                    {/* Directly use the Link component */}
                    <Link href="/login">
                        <button
                            type="button"
                            style={{ width: '74px', height: '34px', padding: '6px 16px' }}
                            className="flex items-center justify-center bg-white text-[#222222] text-base font-semibold leading-6 tracking-normal rounded border border-[#222222] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Login
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button
                            type="button"
                            style={{ width: '85px', height: '34px', padding: '6px 16px', backgroundColor: '#FFA724', borderColor: '#FFA724' }}
                            className="flex items-center justify-center text-[#222222] text-base font-semibold leading-6 tracking-normal rounded border hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Signup
                        </button>
                    </Link>
                </div>







            </div>

            {/* Placeholder for other header items */}
            <div>
                {/* Other header content such as additional navigation links or buttons would go here */}
            </div>
        </header>
    );
};

export default Header;




































































// // Header.tsx
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Header: React.FC = () => {
//     return (
//         <header className="w-[1120px] h-[56px] bg-white flex justify-between items-center px-2 border-b border-gray-400">
//             <div className="flex items-center space-x-4">
//                 {/* Link component wrapping Image component for logo */}
//                 <Link href="/">
//                     <Image src="/reel-talk-logo.png" alt="Reel Talk Logo" width={118} height={26} />
//                 </Link>


//                 {/* Navigation Links */}
//                 {/* ... navigation links ... */}

//                 {/* Search Box */}
//                 <div className="ml-4 relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Image src="/search-icon.svg" alt="Search" width={20} height={20} />
//                     </div>
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="w-[351px] h-[34px] pl-10 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//                         style={{ backgroundColor: '#00000014' }}
//                     />
//                 </div>
//             </div>

//             {/* Placeholder for other header items */}
//             <div>
//                 {/* Other header content */}
//             </div>
//         </header>
//     );
// };

// export default Header;






// import Link from 'next/link';

// const Header = () => {
//     return (
//         <header className="border-b-2 py-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 {/* Other header content */}
//                 <nav>
//                     <ul className="flex space-x-4">
//                         <li>
//                             {/* Updated Link usage without <a> tag */}
//                             <Link href="/browse">
//                                 <span className="cursor-pointer hover:underline">Browse</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="/community">
//                                 <span className="cursor-pointer hover:underline">Community</span>
//                             </Link>
//                         </li>
//                         {/* More navigation items */}
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;
