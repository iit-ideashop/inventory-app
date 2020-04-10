import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from './components/TopBar'
// import Button from '@material-ui/core/Button'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/IconButton'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  return (
    <div>
      <TopBar/>
    </div>
  );
}

export default App;
