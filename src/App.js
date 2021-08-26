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
import { connect } from 'react-redux';
import { getProfile } from './actions/profile.actions';
import { getPostsAsync } from './actions/feed.actions';

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

function App(props) {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link className={classes.menuButton} to="/">Home</Link>
            <Link className={classes.menuButton} to="/profile" onClick={() => props.getProfile()}>Profile</Link>
            <Link className={classes.menuButton} to="/feed" onClick={() => props.getPostsAsync()}>News Feed</Link>
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

export default connect(null, { getProfile, getPostsAsync })(App);
