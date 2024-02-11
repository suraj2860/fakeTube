import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';



const SearchFeed = () => {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <Box p={2} ml={12} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h5' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                Search results for : <span style={{ color: '#F31503' }}>{searchTerm}</span>
            </Typography>
            <Videos videos={videos.filter((vid) => vid?.id?.kind !== 'youtube#playlist')} />
        </Box>
    )
}

export default SearchFeed