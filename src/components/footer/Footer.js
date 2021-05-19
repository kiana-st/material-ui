import { Container, Grid, Box, Link } from '@material-ui/core';

import React from 'react';

function Footer() {
  return (
    <footer>
      <Box px={{xs:3,sm:10}} py={{xs:5, sm:10}} bgcolor="green" color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
            </Grid>


            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
            </Grid>



            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
            </Grid>



            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{xs:5,sm:10}} pb={{xs:5,sm:0}}>ddddd</Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
