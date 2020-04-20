import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Skeleton from '@material-ui/lab/Skeleton';
import { Chip, ListItemAvatar, ListItemText, ListItemSecondaryAction, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  item: {
    // padding: theme.spacing(),
    // height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

// Category chips
const popularCategories = ['electronics', 'screws/hardware', 'adhesives/chemicals', 'acrylic', 'wood', 'test', 'another item', 'what else', 'one more'];
const chips = popularCategories.map((category) =>
  <Chip
    label={category}
    clickable
    color='secondary'
    variant='outlined'
  />
);

// List Items
const items = [
  { title: 'Wood Block - Maple', description: 'this is a description for maple wood product', price: 3.40, unit: 'per foot' },
  { title: 'Female/Male \'Extension\' Jumper Wires (300mm)', description: 'this is a description for wires I guess', price: 0.40, unit: 'per foot' },
  { title: 'Red Acrylic Sheet (12x12 inches)', description: 'this is a description for an acrylic sheet', price: 6.00, unit: 'per sheet' }];
const listItems = items.map((item) =>
  <div>
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Box mr={2}>
          <Skeleton variant='rect' width={210} height={118}/>
        </Box>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant='h5' gutterBottom>
            {item.title}
          </Typography>
          }
        secondary={item.description}
      />
      <ListItemSecondaryAction flexDirection='column'>
        <p>${item.price} {item.unit}</p>
        <Button variant='contained' color='secondary'>Add to Cart</Button>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
  </div>
);

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item/>

        {/* Title Header */}
        <Grid item xs={12}>
          <Typography variant='h2' align='center'>
            Welcome to the Idea Shop's Inventory
         </Typography>
        </Grid>

        {/* Subtitle */}
        <Grid xs={3}/>
        <Grid xs={6}>
          <Typography variant='h6' align='center' color='textSecondary' gutterBottom>
            Search for an item or select a category.
         </Typography>
        </Grid>
        <Grid xs={3}/>

        {/* Category Chips */}
        <Grid item xs={3}/>
        <Grid item className={classes.chip} xs={6}>
          <Box className={classes.chip}>
            {chips}
          </Box>
        </Grid>
        <Grid item xs={3}/>
        
      </Grid>

      {/* List of Items */}
      <List component='nav'>
        {listItems}
      </List>

    </div>
  );
}