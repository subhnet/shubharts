import React from 'react';

const Header = () => {
    return (
        <div className="flex-grow">
            <div className="bg-gradient-to-r from-black to-transparent bg-gradient-to-r via-orange-500 to-yellow-300 text-white">
                <div className="flex items-center justify-between p-4">
                    <a>
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Shubh's Artwork</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
