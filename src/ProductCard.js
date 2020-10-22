import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, IconButton, Typography} from '@material-ui/core';
import {ShoppingCart, Book} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: 338,
    backgroundColor: '#8e7b6b',
    '&:hover': {
        transform: [{scale: 1}],
        opacity:1,
        boxShadow: '20px 8px 20px 8px rgba(0,0,0.125,0.125)',
      },
  },
  media: {
    height: '75%',
    // paddingTop: '56.25%', // 16:9
  },
}));

export default function ProductCard() {
  const classes = useStyles();

  return (
    <div>  
    <Link to = '/productpage' style = {{textDecoration: 'none'}}>
    <Card className={classes.root} >
      <CardMedia
        className={classes.media}
        image={require("./Top1.jpeg")}
        title="Black top"
      />
      {/* <CardContent > */}
        <Typography style = {{fontSize: 18, marginTop: '2%', textAlign: 'center', fontWeight: '500'}} color="black" >
            Regular Black Top
        </Typography>
      {/* </CardContent> */}
      {/* <CardActions > */}
      {/* <IconButton aria-label="add to wishlist" style = {{marginLeft: '30%', color: '#150e38'}}>
          <Book />
        </IconButton> */}
        <IconButton aria-label="add to cart" style = {{color: '#150e38', marginLeft: '40%'}}>
          <ShoppingCart/>
        </IconButton>
       {/* </CardActions>  */}
    </Card>
    </Link>
    </div>  
  );
}
