import React from 'react';
import Nav from './navigation/Nav';
import { Button, makeStyles, Grid } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    background: 'gray',
    [theme.breakpoints.down('xm')]:{
      backgroundColor: 'yellow',
    },
  },
  
  buttonwatch: {
    margin: theme.spacing(1),
    background: '#ffff',
    width:'231px',
  },
  buttonstart: {
    color: '#ffff',
    background: 'transparent',
    width:'231px',

  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <div className={classes.container}>
        <video src="/my-app/public/videos/video-2.mp4" autoplay muted loop type="video/mp4.mp4"/>
        <h1>ADVENTURE AWAITING</h1>
        <p>WHAT ARE OU WAITING FOR?</p>
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={6} container  justify="center"
            alignItems="center">
              <Button variant="outlined" className={classes.buttonstart}>
                GET STARTED
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6} container  justify="center"
            alignItems="center">
              <Button
                variant="contained"
                endIcon={<PlayCircleOutlineIcon />}
                className={classes.buttonwatch}
              >
                WATCH TRAILER
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Header;
