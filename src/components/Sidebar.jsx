import React from 'react';
import { height, Stack } from '@mui/system';
import { categories } from '../utils/constants';


// const selectedCategory = 'New';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (    
    <Stack 
        direction='row'
        sx={{
            overflow:'auto',
            height: { sx:'auto', md: '95%' },
            flexDirection: { md: 'column' }
        }}    
    >
        {categories.map((category) => (
            <button key={category.name} 
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#28282B',
                    color: 'white'
                }}
                >
                <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}

    </Stack>
)

export default Sidebar