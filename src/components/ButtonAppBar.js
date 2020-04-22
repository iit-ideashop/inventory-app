import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import RightArrowIcon from "@material-ui/icons/KeyboardArrowRightRounded"
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(2)
  },
  search: {
    display: "flex",
    flexGrow: 0.5,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    flexDirection: "row",
    alignItems: "center"
  },
  barIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: theme.spacing(0, 2)
  },
  searchSubmit: {
    marginRight: theme.shape.borderRadius + "px"
  },
  toolbarLeftGroup: {
    paddingLeft: 0
  },
  inputRoot: {
    color: "inherit",
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Toolbar className={classes.toolbarLeftGroup}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Idea Shop Inventory
            </Typography>
          </Toolbar>
          <Hidden xsDown>
            <div className={classes.search}>
              <div className={classes.barIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search" classes={{
                root: classes.inputRoot
              }} />
              <Button color="inherit" className={classes.barIcon + " " + classes.searchSubmit}>
                <RightArrowIcon />
              </Button>
            </div>
          </Hidden>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}