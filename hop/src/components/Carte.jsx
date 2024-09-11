import React from "react";
import {CardContent,Card, Typography,Box,Grid2 as Grid, CardMedia} from '@mui/material'
export function Cart(){
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                        Live From Space
                        </Typography>

                        <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                        >
                        Mac Miller
                        </Typography>
                    </CardContent>
                </Box> 
            </Card>
        </>
    )
}