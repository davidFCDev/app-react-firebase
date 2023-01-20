import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export const ImageAvatars = () => {

    const random = Math.floor(Math.random() * 101);

    return (
        
        <Avatar
            alt="Remy Sharp"
            src={`https://www.gravatar.com/avatar/bfcb1d6a22d7098499${random}d3bcec5a8c6?d=robohash&f=y&s=128`}
            sx={{ width: 80, height: 80 }}
            variant="rounded"
        />
    );
}
