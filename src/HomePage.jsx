import React from 'react'
//import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import {Carousel} from 'react-responsive-carousel'
//import GridLayout from 'react-grid-layout'
import Grid from '@material-ui/core/Grid';

import HomePageCard from './HomePageCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


export default function HomePage() {
  const [spacing, setSpacing] = React.useState(2);

  const classes = useStyles();
    return (
      <Grid container className={classes.root} spacing={2}>
        <HomePageCard />
      </Grid>
        
    )
}

