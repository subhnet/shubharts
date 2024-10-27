import React, { useState } from 'react';

const GalleryModal = ({ artworks, currentIndex, onClose, onNext, onPrevious }) => {
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') onNext();
            else if (e.key === 'ArrowLeft') onPrevious();
            else if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNext, onPrevious, onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="relative max-w-3xl">
                <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
                <img
                    src={artworks[currentIndex].preview}
                    alt={artworks[currentIndex].title}
                    className="w-full h-auto object-contain"
                />
                <div className="flex justify-between mt-4">
                    {/* <button onClick={onPrevious} className="text-white text-2xl px-4 py-2 bg-black bg-opacity-50 rounded">Previous</button> */}
                    {/* <button onClick={onNext} className="text-white text-2xl px-4 py-2 bg-black bg-opacity-50 rounded">Next</button> */}
                    <button onClick={onPrevious} type="button" className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                        <div className="flex flex-row align-middle">
                            <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                            </svg>
                            <p className="ml-2">Prev</p>
                        </div>
                    </button>
                    <button  onClick={onNext} type="button" className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
                        <div className="flex flex-row align-middle">
                            <span className="mr-2">Next</span>
                            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default GalleryModal;