import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="h2" align='center' gutterBottom>
           Welcome to the Idea Shop's Inventory
         </Typography>
         </Grid>
        
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <Typography variant="h6" align='center' gutterBottom>
           Search for an item or select a category.
         </Typography>
         </Grid>
         <Grid item xs={3}></Grid>
      </Grid>
      <List component="nav">
        <ListItem>
          <Skeleton variant="rect" width={210} height={118} />
            <Typography variant="h5" align='center' gutterBottom>
              Wooden Item
            </Typography>
            <Typography variant="body" align='center' gutterBottom>
              Some Text descrption 
            </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          Test 2
        </ListItem>
      </List>
    </div>
  );
}