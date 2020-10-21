import React from 'react';
import {Card, 
    CardActions, 
    CardContent, 
    Button, 
    Typography, 
    TextField, 
    InputAdornment} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {AccountCircle, Lock, Face, Email} from '@material-ui/icons';
import Navbar from './Navbar.js'
import Footer from './footer.js';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        backgroundColor: '#8e7b6b',
      },
    card: {
        width: 300,
        height: 400,
        // marginTop: 40,
        // marginBottom: 20,
        boxShadow: '0 0 0.3rem 0.4rem rgba(0,0,0,.1)',
        padding: 20,
        backgroundColor: '#fbf7f5'
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
        width: '25ch',
      },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },
  }));

export default function SignIn(){
    const classes = useStyles();
    const [values, setValues] = React.useState({
        username: '',
        email: '',
        password: '',
        showPassword: false,
      });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return(
        <div><Navbar />
        <div className = {classes.root}>
            <Card className={classes.card} variant="outlined">
             <CardContent>
                 <Typography className = {classes.title}> 
                     SIGN UP
                 </Typography><br />
                 <TextField
                    className={classes.margin, classes.textField}
                    id="input-with-icon-textfield"
                    placeholder="Name"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Face />
                        </InputAdornment>
                    ),
                    }}
                /><br /><br />
                 <TextField
                    className={classes.margin, classes.textField}
                    id="input-with-icon-textfield"
                    placeholder="Email ID"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Email />
                        </InputAdornment>
                    ),
                    }}
                /><br /><br />
                 <TextField
                    className={classes.margin, classes.textField}
                    id="input-with-icon-textfield"
                    placeholder="UserName"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                /><br /><br />
                <TextField className={classes.margin, classes.textField}
                    id="input-with-icon-textfield"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    placeholder = 'Password'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Lock />
                            </InputAdornment>
                        ),
                        }}
                /><br /><br />
                <TextField
                    id="input-with-icon-textfield" className={classes.margin, classes.textField}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    placeholder = 'Confirm Password'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Lock />
                            </InputAdornment>
                        ),
                        }}
                /><br /><br />
             </CardContent>
             <CardActions style = {{justifyContent: 'center'}}>
                 <Link to = './homepage'>
                 <Button size="medium" variant="contained" style= {{backgroundColor: '#e7a488', fontWeight: '600'}} >Sign Up</Button>
                 </Link>
            </CardActions>
        </Card>
        </div>
        <Footer />
        </div>
    );
}