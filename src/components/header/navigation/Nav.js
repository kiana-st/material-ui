import React, { useState } from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Toolbar,
  Button,
} from '@material-ui/core';

function Nav() {
  const [value, setValue] = useState(0);
  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar color="primary">
        <Toolbar>
          <Typography>TRVL</Typography>
          <Tabs
            disableRipple
            onChange={handleClickTab}
            indicatorColor="secondary"
            value={value}
          >
            <Tab disableRipple label="Home" />
            <Tab disableRipple label="Services" />
            <Tab disableRipple label="Products" />
          </Tabs>
          <Button variant="outlined" color="secondary">
            SIGN UP
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
