import React from 'react';

import Marquee from 'react-fast-marquee';

interface TrustBarProps {
    images: string[];
}

const TrustBar: React.FC<TrustBarProps> = ({ images }) => {
    return (
        <div>
            {images.map((image) => (
                <img
                    width={100}
                    key={image}
                    src={image}
                    className="mx-10"
                    alt="Trust Logo"
                />
            ))}
        </div>
    );
};

export default TrustBar;
