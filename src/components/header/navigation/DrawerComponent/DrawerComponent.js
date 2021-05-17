import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme =>({
    menuIconContainer:{
        justifyContent:'flex-end',
        flexGrow:  1,

    },
}));

const DrawerComponent = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor={'right'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Services</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Products</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton className={classes.menuIconContainer} onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
