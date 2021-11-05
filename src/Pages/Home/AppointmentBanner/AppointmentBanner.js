import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.7)',
    backgroundBlendMode: `darken`,
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <div>

            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img
                                src={doctor}
                                style={{ width: 400, marginTop: -110 }}
                                alt="" />
                        </Grid>
                        <Grid item xs={12} md={6}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                textAlign: 'left',
                                alignItems: 'center'
                            }}>
                            <Box>
                                <Typography variant="h6" style={{ color: '#19D2B8' }}>
                                    APPOINTMENT
                                </Typography>
                                <Typography variant="h4" style={{ color: 'white' }}>
                                    Make an Appointment Today
                                </Typography>
                                <Typography variant="h6" style={{ color: 'white', fontSize: 14, fontWeight: 500 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima debitis quia aperiam, laborum iste unde ullam vel sed tempora. Quidem?
                                </Typography>
                                <Button variant="contained" style={{ backgroundColor: '#19D2B8', marginTop: 50  }}>
                                    Learn More
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default AppointmentBanner;