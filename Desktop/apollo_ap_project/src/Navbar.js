import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {AccountCircle, ShoppingCart, Book} from '@material-ui/icons';
import {AppBar, 
      Toolbar, 
      IconButton, 
      Typography, 
      InputBase,
      Button, } from '@material-ui/core';
  import {Link} from'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: '#e7a488'
    // position: 'absolute'
  },
  title: {
    flexGrow: 1,
    display: 'none',
    textDecoration: 'none',
    fontFamily: 'Dancing Script', 
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'black'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: 'black',
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <div >
      <AppBar position="fixed" style = {{background: '#a8cac6', padding: 8}}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Link to = '/homepage' className={classes.title}><Typography variant="h6" noWrap>
            APOLLO
          </Typography></Link>
          <div style = {{marginRight: '20%'}}>
            <Button style = {{fontSize: 16, fontWeight: '600'}}>Women</Button>&nbsp;
            <Button style = {{fontSize: 16, fontWeight: '600'}}>Men</Button>&nbsp;
            <Button style = {{fontSize: 16, fontWeight: '600'}}>Kids</Button>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>&nbsp;&nbsp;
          <IconButton
            edge="end"
            color="inherit"
            // aria-label="open drawer"
          ><AccountCircle style = {{color: 'black'}}/></IconButton>
          {/* <IconButton
            edge="end"
            color="inherit"
            // aria-label="open drawer"
          ><Book style = {{color: 'black'}}/></IconButton> */}
          <IconButton
            edge="end"
            color="inherit"
            // aria-label="open drawer"
          ><ShoppingCart style = {{color: 'black'}}/></IconButton>
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}