import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';

const bannerBackground = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450

}

const Banner = () => {
    return (
        <Container style={bannerBackground} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et vitae deleniti facere. Dolor ipsum eligendi, aspernatur culpa nostrum at?
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} alt="" style={{ width: '350px' }} />
                </Grid>
            </Grid>
        </Container>

    );
};

export default Banner;