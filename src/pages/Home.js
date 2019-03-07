import React, {useContext} from 'react'
import { observer } from 'mobx-react-lite'
import {AuthStoreContext} from '../stores/AuthStore'
import {withRouter, Redirect} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles';
import {Paper, Typography, Button} from '@material-ui/core'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  button: {
   margin: theme.spacing.unit,
  }
});

const HomePage = observer((props) => {
  const authStore = useContext(AuthStoreContext);
  const { classes } = props;

  const logout = () => {
    authStore.logout();
    props.history.push('/login')
  }

  return (<div className={classes.main}>
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h3">
        Email: {authStore.user.email}
      </Typography>
      <Typography component="p">
        Name: {authStore.user.name}
      </Typography>
      <Button variant="text" color="secondary" className={classes.button} onClick={logout}>
        Logout
      </Button>
    </Paper>
  </div>)
});

export default withRouter(withStyles(styles)(HomePage))
