import React from 'react';
import { Container, Typography, Grow, Grid, AppBar } from '@mui/material';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import recollect from './images/recollect.webp';
import useStyle from './styles';

const App = () => {
  const { classes } = useStyle();
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Re-Collect
        </Typography>
        <img
          className={classes.image}
          src={recollect}
          alt='recollect-logo'
          height={70}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
