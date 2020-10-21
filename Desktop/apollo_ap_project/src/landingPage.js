import React from 'react';
import {Card, CardMedia, IconButton, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'

export default function landingPage(){
    return(
        <div>
            <Typography>LANDING PAGE</Typography>
            <Link to="/signin">SignIn</Link>
        </div>
    );
}
