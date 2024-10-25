// src/Gallery.jsx
import React, { useState } from 'react';

const artworks = [
    { thumbnail: 'https://i.imgur.com/3YqLn4Jm.jpg', preview: 'https://i.imgur.com/3YqLn4J.jpg', title: 'Artwork 1' },
    { thumbnail: 'https://i.imgur.com/d6mNydzm.jpg', preview: 'https://i.imgur.com/d6mNydz.jpg', title: 'Artwork 1' },
    { thumbnail: 'https://i.imgur.com/1fIekt1m.jpg', preview: 'https://i.imgur.com/1fIekt1.jpg', title: 'Artwork 2' },
    { thumbnail: 'https://i.imgur.com/tXqOrj4m.jpg', preview: 'https://i.imgur.com/tXqOrj4.jpg', title: 'Artwork 3' },
    { thumbnail: 'https://i.imgur.com/pkn0wnLm.jpg', preview: 'https://i.imgur.com/pkn0wnL.jpg', title: 'Artwork 4' },
    { thumbnail: 'https://i.imgur.com/jihmumJm.jpg', preview: 'https://i.imgur.com/jihmumJ.jpg', title: 'Artwork 5' },
    { thumbnail: 'https://i.imgur.com/v8DcF7vm.jpg', preview: 'https://i.imgur.com/v8DcF7v.jpg', title: 'Artwork 6' },
    { thumbnail: 'https://i.imgur.com/AigxY8Im.jpg', preview: 'https://i.imgur.com/AigxY8I.jpg', title: 'Artwork 7' },
    { thumbnail: 'https://i.imgur.com/AhY4etNm.jpg', preview: 'https://i.imgur.com/AhY4etN.jpg', title: 'Artwork 8' },
    { thumbnail: 'https://i.imgur.com/2DIilUim.jpg', preview: 'https://i.imgur.com/2DIilUi.jpg', title: 'Artwork 9' },
    { thumbnail: 'https://i.imgur.com/ZjBHtrkm.jpg', preview: 'https://i.imgur.com/ZjBHtrk.jpg', title: 'Artwork 10' },
    { thumbnail: 'https://i.imgur.com/42N47KMm.jpg', preview: 'https://i.imgur.com/42N47KM.jpg', title: 'Artwork 11' },
    { thumbnail: 'https://i.imgur.com/vGsmSjLm.jpg', preview: 'https://i.imgur.com/vGsmSjL.jpg', title: 'Artwork 12' },
    { thumbnail: 'https://i.imgur.com/oNC7THDm.jpg', preview: 'https://i.imgur.com/oNC7THD.jpg', title: 'Artwork 13' },
    { thumbnail: 'https://i.imgur.com/brvBFibm.jpg', preview: 'https://i.imgur.com/brvBFib.jpg', title: 'Artwork 14' },
];

const Gallery = () => {
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    const openPreview = (artwork) => {
        setSelectedArtwork(artwork);
    };

    const closePreview = () => {
        setSelectedArtwork(null);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closePreview();
        }
    };

    return (
        <div className="p-4">
            {/* Grid Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {artworks.map((artwork, index) => (
                    <div key={index} className="overflow-hidden rounded shadow-lg cursor-pointer" onClick={() => openPreview(artwork)}>
                        <img
                            src={artwork.thumbnail}
                            alt={artwork.title}
                            className="w-full h-48 object-cover"
                        />
                        {/* <div className="p-2 text-center font-semibold text-gray-700">{artwork.title}</div> */}
                    </div>
                ))}
            </div>

            {/* Modal for Full-Size Preview */}
            {selectedArtwork && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleOverlayClick}

                >
                    <div className="relative max-w-3xl">
                        <button onClick={closePreview} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
                        <img
                            src={selectedArtwork.preview}
                            alt={selectedArtwork.title}
                            className="w-full h-auto object-contain"
                        />
                        {/* <p className="text-center text-white mt-2">{selectedArtwork.title}</p> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
