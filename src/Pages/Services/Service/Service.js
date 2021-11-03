import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        style={{width: 'auto', height: '80px', margin:'0 auto'}}
                        image={img}
                        alt="green iguana"
                    />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        be{ }nev{ }o{ }lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Service;