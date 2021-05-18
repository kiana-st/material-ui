import React from 'react';
import {
  Typography,
  makeStyles,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  Grid,
} from '@material-ui/core';
import logo from '../pictures/eiffel.jpg';
import tree from '../pictures/tree.jpg';
import leaf from '../pictures/leaf.jpg';
import jungle from '../pictures/jungle.jpg';
import paysage from '../pictures/paysage.jpg';

const useStyles = makeStyles({
  text: {
    width: '100%',

    textAlign: 'center',
  },
  root: {
    maxWidth: 500,
    margin:'20px',
  },
  media: {
    height: 300,
    
  },
  card:{
    flexGrow: 1,

  },
  pic:{
    maxWidth: 400,
    margin:'20px',

  },
  pic2:{
    height: 300,

  }
});
function Main() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" gutterBottom className={classes.text}>
        Check out EPIC Destinations!
      </Typography>
      <Grid container direction="row" 
        justify="center"
        alignItems="center">
        <Grid item>
          <Card className={classes.root} xl={6}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={logo}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except
          </Typography>
            </CardActions>
          </Card>
        </Grid>


        <Grid item xl={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={tree}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except
          </Typography>
            </CardActions>
          </Card>
        </Grid>






        <Grid item xl={4}>
          <Card className={classes.pic}>
            <CardActionArea>
              <CardMedia
                className={classes.pic2}
                image={leaf}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except
          </Typography>
            </CardActions>
          </Card>
        </Grid>


        <Grid item xl={4}>
          <Card className={classes.pic}>
            <CardActionArea>
              <CardMedia
                className={classes.pic2}
                image={jungle}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except
          </Typography>
            </CardActions>
          </Card>
        </Grid>



        <Grid item xl={4}>
          <Card className={classes.pic}>
            <CardActionArea>
              <CardMedia
                className={classes.pic2}
                image={paysage}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except
          </Typography>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}

export default Main;
