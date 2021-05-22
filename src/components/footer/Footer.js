import {
  Container,
  Grid,
  Box,
  Link,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles((theme) => ({
  input: {
    textAligne: 'center',
  },
  btn:{
    marginLeft:'20px',
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#242729"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <Box textAlign="center">
                Join the Adventure newsletter to receive our best vacation deals
              </Box>
              <Box textAlign="center" p={2}>
                You Can unsubscribe at any time.
              </Box>
              <Box textAlign="center" className={classes.input}>
                <TextField
                  id="outlined-size-normal"
                  defaultValue="Your Email"
                  variant="outlined"
                  size="small"
                  marginLeft= '20px'

                />
                <Button variant="contained" color="secondary" className={classes.btn}>
                  Subscribe
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1} fontSize="22px">
                About us
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  How it works
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Testimonials
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Careers
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Investors
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box borderBottom={1} fontSize="22px">
                Contact Us
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Destinations
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Sponsorships
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box borderBottom={1} fontSize="22px">
                Videos
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Submit Video
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Ambassadors
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Agency
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Influencer
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box borderBottom={1} fontSize="22px">
                Social Media
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Youtube
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Twitter
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Box>TRVL</Box>
              <Box>TRVL &copy; 2020</Box>
              <Box>TRVL</Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
