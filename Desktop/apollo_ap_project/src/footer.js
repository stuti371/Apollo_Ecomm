import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: '#a8cac6',
    paddingLeft: 100,
    paddingRight: 50,
    justifyContent: 'space-evenly' 
  },
}))

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs='4'style = {{marginLeft: 20, marginTop: 5}}>
            <Typography>+91 9XXXXXXXXX</Typography>
            <Typography>customercare@apollo.com</Typography>
            <Typography>X - 000, abcde fghi, New Delhi - 1xxxxxx</Typography>
        </Grid>
        <Grid item xs = '5'>
          <Grid container spacing= {6} >
            <Grid item >
              <Link to = '/women' style = {{textDecoration: 'none'}}><Button style = {{marginLeft: 18}}>Women</Button></Link>
            </Grid>
            <Grid item>
            <Link to = '/men' style = {{textDecoration: 'none'}}><Button style = {{marginLeft: 20}}>Men</Button></Link>
            </Grid>
            <Grid item>
            <Link to = '/kids' style = {{textDecoration: 'none'}}><Button style = {{marginLeft: 42}}>Kids</Button></Link>
            </Grid>
          </Grid>
          <Grid container spacing= {3} >
            <Grid item>
              <Button>Contact Us</Button>
            </Grid>
            <Grid item>
              <Button>Terms of Use</Button>
            </Grid>
            <Grid item>
              <Button>Privacy Policy</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs = '2' style = {{ marginTop: 20}}>
            <a href='#'><img src = {require("./instagram.png")} style = {{width: 30, height: 30, marginRight: 10}}/></a>
            <a href='#'><img src = {require("./facebook.png")} style = {{width: 30, height: 30, marginRight: 10}}/></a>
            <a href='#'><img src = {require("./twitter.png")} style = {{width: 30, height: 30}}/></a>
        </Grid>
          <p style = {{marginLeft: 38}}>
            &copy;{new Date().getFullYear()} APOLLO | All rights reserved |
            Terms Of Service | Privacy
          </p>
      </Grid>
      </div>
  );
}


