import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import Home from './components/Home';
import NewsFeed from './components/NewsFeed';
import Profile from './components/Profile';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: 'white'
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link className={classes.menuButton} to="/">Home</Link>
            <Link className={classes.menuButton} to="/profile">Profile</Link>
            <Link className={classes.menuButton} to="/feed">News Feed</Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/feed">
            <NewsFeed />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
