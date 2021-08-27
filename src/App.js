import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, CircularProgress, makeStyles, Toolbar } from '@material-ui/core';
import Home from './components/Home';
import NewsFeed from './components/NewsFeed';
import Profile from './components/Profile';
import { connect } from 'react-redux';

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
            <Link className={classes.menuButton} to="/profile">Profile</Link>
            <Link className={classes.menuButton} to="/feed">News Feed</Link>
          </Toolbar>
        </AppBar>

        <div style={{ width: '90%', margin: 'auto', marginTop: '20px' }}>
          {props.isLoading ? (
            <CircularProgress />
          ) : (
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
          )}
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading
  }
}

export default connect(mapStateToProps, { })(App);
