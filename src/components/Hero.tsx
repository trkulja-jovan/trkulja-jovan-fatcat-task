import React from 'react';

interface Props {
    title: string;
    image: string;
}
const Hero: React.FC<Props> = ({ title, image }: Props) => {
    return (
        <div className="flex row justify-center items-center gap-4 h-screen">
            <div className="w-4/12">
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            <div className="w-4/12">
                <img src={image} width="100%" alt="Hero" loading="eager" />
            </div>
        </div>
    );
};

export default Hero;
