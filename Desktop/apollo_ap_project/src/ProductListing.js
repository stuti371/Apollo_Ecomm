import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard.js'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Navbar from './Navbar.js';
import Footer from './footer.js'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: 340,
    '&:hover': {
        transform: [{scale: 5}],
        opacity:1,
        boxShadow: '20px 8px 20px 8px rgba(0,0,0.2,0.2)',
      },
  },
  media: {
    height: '75%',
    // paddingTop: '56.25%', // 16:9
  },
}));

export default function ProductListing() {
  const classes = useStyles();

  return (
      <div style = {{backgroundColor: '	#fbf7f5'}}>
        <Navbar />
      <Container style = {{padding: 100, marginTop: '5%', marginLeft: '9%'}}>
        <Grid container spacing={3}>
            <Grid item xs>
                <ProductCard/>
            </Grid>
            <Grid item xs>
                <ProductCard/>
            </Grid>
            <Grid item xs>
                <ProductCard/>
            </Grid>
            <Grid item xs>
                <ProductCard/>
            </Grid>
            <Grid item xs>
                <ProductCard/>
            </Grid>
            <Grid item xs>
                <ProductCard/>
            </Grid>
            <Grid item xs>
                <ProductCard/>
            </Grid>
            <Grid item xs>
                <ProductCard/>
            </Grid>
            <Grid item xs>
                <ProductCard/>
            </Grid>
        </Grid>
     </Container>
     <Footer />
     </div>
  );
}