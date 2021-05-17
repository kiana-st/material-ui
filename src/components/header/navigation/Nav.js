import React, { useState } from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Toolbar,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import DrawerComponent from './DrawerComponent/DrawerComponent';

//custom css

const useStyles = makeStyles((theme) => ({
  accountButton: {
    marginRight: theme.spacing(2),
    color: '#fff',
    '&:hover': {
      background: '#007ec1',
    },
  },
  nav: {
    marginLeft: 'auto',
  },
}));

function Nav() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [value, setValue] = useState(0);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };
  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <AppBar color="primary">
        <Toolbar>
          <Typography>TRVL</Typography>
          {isMatch ? (
            <DrawerComponent />
          ) : (
            <>
              <Tabs
                disableipple
                onChange={handleClickTab}
                indicatorColor="secondary"
                value={value}
                className={classes.nav}
              >
                <Tab disableRipple label="Home" />
                <Tab disableRipple label="Services" />
                <Tab disableRipple label="Products" />
              </Tabs>
              <Button
                className={classes.accountButton}
                aria-controls="menu"
                onClick={handleOpenMenu}
                disableRipple
                variant="outlined"
                color="secondary"
              >
                SIGN UP
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        style={{ marginTop: '50px' }}
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Exit</MenuItem>
      </Menu>
    </>
  );
}

export default Nav;
