import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Skeleton from '@material-ui/lab/Skeleton';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  chip: {
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const titles = ['Wood', 'Paper', 'Acrylic'];
const listItems = titles.map((titles) =>
  <div>
  <ListItem>
    <Skeleton variant="rect" width={210} height={118} />
      <Typography variant="h5" align='center' gutterBottom>
        {titles}
      </Typography>
      <Typography variant="body" align='center' gutterBottom>
        Some Text descrption 
      </Typography>
  </ListItem>
  <Divider/>
  </div>
);

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item></Grid>
        <Grid item xs={12}>
        <Typography variant="h2" align='center'>
           Welcome to the Idea Shop's Inventory
         </Typography>
         </Grid>

         <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <Typography variant="h6" align='center' color='textSecondary' gutterBottom>
           Search for an item or select a category.
         </Typography>
         </Grid>
         <Grid item xs={3}></Grid>
        
         <Grid item xs={3}></Grid>
         <Grid item className={classes.chip} xs={6}>
            <Chip
            label="electronics"
            clickable
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="screws/hardware"
            clickable
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="adhesives/chemicals"
            clickable
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="acrylic"
            clickable
            color="secondary"
            variant="outlined"
          />
          <Chip
            label="wood"
            clickable
            color="secondary"
            variant="outlined"
          />
         </Grid>
         <Grid item xs={3}></Grid>
      </Grid>
      <List component="nav">
        {listItems}
        </List>      
    </div>
  );
}