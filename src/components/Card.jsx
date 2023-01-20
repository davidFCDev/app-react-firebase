import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AppContext } from '../App';
import ImageAvatars from './Avatar';


export const OutlinedCard = () => {
    const {  user } = React.useContext(AppContext);
    return (
        <Box >
                <Card className='max-w-lg flex' variant="outlined">
                    <div className='text'>
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Profile User
                        </Typography>
                        <Typography component="div">
                            <p className='text-2xl py-1 font-semibold'>
                                {user.displayName}  
                            </p>
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <p className='italic font-light text-sm te'>
                                {user.email}  
                            </p>  
                        </Typography>
                        <Typography variant="body2">
                        <p className='py-4'>
                            your shopping list is empty,
                            <br />
                            do your first purchase!
                        </p>
                        </Typography>
                        </CardContent>
                    </div>
                    <div className='py-10 px-7'>
                        <ImageAvatars />
                    </div>
                </Card>
        </Box>
    )
}