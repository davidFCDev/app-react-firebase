import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AppContext } from '../App';

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
                            <span className='text-2xl py-1 font-semibold'>
                                {user.displayName}  
                            </span>
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <span className='italic font-light text-sm te'>
                                {user.email}  
                            </span>  
                        </Typography>
                        <Typography variant="body2">
                            <span className='py-4 text-red-800'>
                                your shopping list is empty,
                            </span>
                            <br></br>
                            <span>
                                do your first purchase!
                            </span>
                        </Typography>
                        </CardContent>
                    </div>
                        <img alt='img' src={user.photoURL} className='w-20 h-20 my-6 mx-6 rounded-full border border-slate-300'></img>
                </Card>
        </Box>
    )
}