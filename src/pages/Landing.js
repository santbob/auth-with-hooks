import React, {useContext, useEffect} from 'react'
import {AuthStoreContext} from '../stores/AuthStore'
import {CircularProgress} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom'

const styles = theme => ({
  mainLoader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const LandingPage = (props) => {
  const authStore = useContext(AuthStoreContext);
  const {mainLoader} = props.classes;
  useEffect(() => {
    authStore.authorize().then((user) => {
      props.history.push('/home')
    }).catch(() => {
      props.history.push('/login')
    });
  }, []);

  return (<div className={mainLoader}><CircularProgress/></div>)
};

export default withRouter(withStyles(styles)(LandingPage))
