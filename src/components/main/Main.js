import React from 'react';
import {
  Typography,
  makeStyles,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    width: '100%',

    textAlign: 'center',
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
function Main() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" gutterBottom className={classes.text}>
        Check out EPIC Destinations!
      </Typography>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="../pictures/eiffel-tower.jpg"
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="../pictures/eiffel-tower.jpg"
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}

export default Main;
