import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './Service/Service';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';

const services =[
    {
        name: "Fluoride Treatment",
        description: "Lorem ssssssssssssssssssssssssss",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Lorem ssssssssssssssssssssssssss",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ssssssssssssssssssssssssss",
        img: whitening
    }
];



const Services = () => {
    return (
        <div>
            <h2>Services</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>
                                <Service
                                    service= {service}
                                ></Service>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;