import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily:'Roboto',
    fontSize:'30px',
  },
  head:{
      backgroundColor:'#333'
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.head}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            <Link to = '/' className = 'navHead'>THE SHOE STORE</Link>
          </Typography>
          <Link to = '/products' className = "navItem" >PRODUCTS</Link>
          <Link to = '/cart' className = "navItem" >
              <AddShoppingCartIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;