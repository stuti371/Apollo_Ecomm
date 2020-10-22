import React from 'react';
import {Typography, Button, Card, Grid, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Delete} from '@material-ui/icons';

export default function CartProduct(){
    return(
        <div>
            <Card style = {{width: 900, height: 150}}>
                <Grid container>
                    <Grid item xs='3' style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <img src = {require('./Top1.jpeg')} width = '130' height = '150'/>
                    </Grid>
                    <Grid item xs = '7' style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <Typography style = {{marginLeft: '3%', marginTop: '3%', fontSize: 20, fontWeight: '500'}}>Regular Black Top</Typography>
                        <Typography style = {{marginLeft: '3%'}}>Rs. 699</Typography>
                        <IconButton color="inherit">
                            <Delete />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}