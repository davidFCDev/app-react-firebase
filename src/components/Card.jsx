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
                <Card className='max-w-lg flex justify-evenly py-10' variant="outlined">
                    <div className='max-w-xs md:max-w-sm'>
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
                                <span className='italic font-light text-sm pt-10'>
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
                        <img alt='img' src={user.photoURL} className='opacity-0 sm:opacity-100 w-14 h-14 my-3 mx-3 md:w-20 md:h-20 md:my-6 md:mx-6 rounded-full border border-slate-300'></img>
                </Card>
        </Box>
    )
}