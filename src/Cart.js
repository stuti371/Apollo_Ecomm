import React from 'react';
import {Typography, Button, Container, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from './Navbar.js';
import Footer from './footer.js';
import CartProduct from './CartProduct.js';

export default function Cart(){
    return(
        <div>
            <Navbar />
            <Container style = {{paddingTop: 20, paddingBottom: 70,paddingLeft: 70}}>
            <Typography 
                style = {{textAlign: 'center',marginTop: '8%', fontSize: 47, fontWeight: '500'}}>
                YOUR CART
            </Typography><br />
            <div style = {{marginLeft: 120}}>
                <CartProduct /><br />
                <CartProduct /><br />
                < CartProduct />
            </div><br />
             <Button variant = 'contained' style = {{width: 130, backgroundColor: '#e7a488', fontSize: 15, marginLeft: '43%'}}>Pay Now</Button>
             </Container>
            <Footer />
        </div>
    )
}