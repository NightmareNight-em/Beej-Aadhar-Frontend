import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ForestIcon from '@mui/icons-material/Forest';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import image from './2.jpg';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Beej-Aadhar
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const theme = createTheme();

export default function Dashboard() {
    const [res,setRes] = useState([]);
    axios.get("http://localhost:3030/crop/", {
    })
        .then(function (response) {

            setRes(response.data);
            // setRes(response.data[0]);

        })
        .catch(function (error) {
            console.log(error);

        });
    const cards=[1,2,3];
    console.log(res);
    return (<div style={{backgroundImage:'url("https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar  color="success" position="relative">
                <Toolbar>
                    <ForestIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" position="center" noWrap>
                        Beej Aadhar
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                {/* Hero unit */}

                <Container sx={{ py: 12 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {res.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '0.25%',
                                        }}
                                        image={image}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.cropname}
                                        </Typography>
                                        <Typography>
                                            Price:<b>{card.price}</b><br/>
                                            Seller:<b>{card.seller}</b><br/>
                                            Weight:<b>{card.weight}</b><br/>

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}

                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            {/* End footer */}
        </ThemeProvider></div>
    );
}