import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ShoppingCart, Book} from '@material-ui/icons';
import {Button, Typography, Grid, Paper, Modal} from '@material-ui/core';
import ReactImageZoom from 'react-image-zoom';
import Navbar from './Navbar.js';
import Footer from './footer.js';

const useStyles = makeStyles(() => ({
    root:{
        padding: 40,
        marginLeft: 50,
        marginTop: 55,
    },
    title:{
        fontSize: 38,
        fontWeight: '600',
        marginTop: 30,
        color: '#763317', 
    },
    price:{
        fontSize: 35,
        fontWeight: '500',
        marginLeft: 25
    },
    size:{
        borderRadius: 100,
        color: 'black',
        borderColor: '#c1b9ed',
        borderWidth: 3,
        marginRight: 10,
        '&focus': {
            backgroundColor: '#c1b9ed'
        },
    },
}))
export default function ProductPage() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
     setOpen(false);
    };  
    const classes = useStyles();
    return(
        <div style = {{backgroundColor: '#fbf7f5'}}>
            <Navbar />
            <div className = {classes.root}>
                <Grid container spacing = {10}>
                    <Grid item xs = '5'>
                        <Paper >
                        <ReactImageZoom width = '570' 
                            height = '750' 
                            zoomWidth = '570' 
                            img = {require('./Top1.jpeg')} zoomPosition = 'original' />
                        </Paper>
                    </Grid>
                    <Grid item xs='7'> 
                        <div style = {{marginLeft: 30}}>
                        <Typography className = {classes.title}>REGULAR BLACK TOP</Typography>
                        <Typography className = {classes.price}>Rs. 699</Typography><br />
                        <Typography style = {{fontSize: 20}}>SELECT SIZE</Typography><br />
                        <Button variant="outlined" className ={classes.size}> XS</Button>
                        <Button variant="outlined" className ={classes.size}>S</Button>
                        <Button  variant="outlined" className ={classes.size}>M</Button>
                        <Button variant="outlined" className ={classes.size}>L</Button>
                        <Button variant="outlined" className ={classes.size}>XL</Button>
                        <Button type="link" onClick={handleOpen} style = {{color: '#763317', fontWeight: '600', marginLeft: 10}}>
                        Size Chart
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                           <img src ={require("./womenSC.jpg")}/>
                        </Modal><br /><br />
                        <Button variant="contained" style = {{backgroundColor: '#a8cac6', marginTop: 20, borderRadius: 5}}endIcon={<ShoppingCart/>}>Add to Cart</Button>
                        <Button variant="contained" 
                        style = {{backgroundColor: '#a8cac6', marginTop: 20, marginLeft: 20, borderRadius: 5}}
                        endIcon={<Book/>}>Add to Wishlist</Button>
                        </div>
                    </Grid>
                </Grid>
            </div><br />
            <Footer />
        </div>
    );
}
