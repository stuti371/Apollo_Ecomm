import React from 'react';
import {Card, CardMedia, Button, Typography, Grid} from '@material-ui/core';
import {ArrowForward} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import Navbar from './Navbar.js';
import Footer from './footer.js'

export default function landingPage(){
    return(
        <div style = {{backgroundColor: '#fbf7f5'}}>
            <Navbar />
            <div style = {{backgroundImage: "url(" + require("./landing1.jpeg") + ")", marginTop: '5%', width: 1450, height: 750,}}>
                <Grid container >
                    <Grid item xs style = {{textAlign: 'center', marginTop: '19%', marginLeft: '37%'}}>
                    <Typography style = {{fontSize: 40, fontWeight: '500'}}>APOLLO'S</Typography>
                    <Typography style = {{fontSize: 53,fontWeight: '500',}}>NEW FALL COLLECTION</Typography>
                    <Typography style = {{fontSize: 40, fontWeight: '500'}}>OUT NOW</Typography>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container>
                    <Grid item xs='2' style = {{textAlign: 'center', marginLeft: '7%', marginTop: '20%'}}>
                        <Typography style = {{fontSize: 40}}>WOMEN'S</Typography>
                        <Typography style = {{fontSize: 40}}>COLLECTION</Typography><br />
                        <Button variant="contained" endIcon={<ArrowForward/>} style = {{backgroundColor: '#e7a488'}}>See More</Button>
                    </Grid>
                    <Grid item xs='8'>
                        <img src = {require('./top11.jpeg')} style = {{marginLeft: '15%'}} height = '750'/>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container>
                    <Grid item xs>
                        <img src = {require('./men.jpeg')} height = '750'/>
                    </Grid>
                    <Grid item xs style = {{textAlign: 'center', marginTop: '20%'}}>
                        <Typography style = {{fontSize: 40}}>MEN'S</Typography>
                        <Typography style = {{fontSize: 40}}>COLLECTION</Typography><br />
                        <Button variant="contained" endIcon={<ArrowForward/>} style = {{backgroundColor: '#e7a488'}}>SEE MORE</Button>
                    </Grid>
                </Grid>
            </div>
            <div style = {{marginBottom: '2%'}}>
                <Grid container>
                    <Grid item xs='2' style = {{textAlign: 'center', marginLeft: '7%', marginTop: '20%'}}>
                        <Typography style = {{fontSize: 40}}>KIDS'</Typography>
                        <Typography style = {{fontSize: 40}}>COLLECTION</Typography><br />
                        <Button variant="contained" endIcon={<ArrowForward/>} style = {{backgroundColor: '#e7a488'}}>See More</Button>
                    </Grid>
                    <Grid item xs= '8'>
                        <img src = {require('./kids.jpeg')} style = {{marginLeft: '15%'}} height = '750'/>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}
