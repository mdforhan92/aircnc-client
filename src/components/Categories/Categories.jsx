import React from 'react';
import Container from '../Shared/Container/Container';
import { categories } from './categoriesData';

const Categories = () => {
    return (
        <Container>
            <div className='pt-4 flex flex-row items-center justify-between overflow-auto'>
                {
                    categories.map(item => 
                    <p>{item.label}</p>)
                }
            </div>
        </Container>
    );
};

export default Categories;