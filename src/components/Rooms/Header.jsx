import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <>
        <Heading
                title='Veluvana Bali - owi Bamboo House'
                subtitle='Sideman, Indonesia'
                center={false}
                />
                <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img 
                className='object-cover w-full'
                src="https://i.ibb.co/M2Zhk3M/cover.jpg" alt="header image" />

                </div>
        </>
    );
};

export default Header;