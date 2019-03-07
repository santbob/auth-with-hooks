import React, {useContext, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {AuthStoreContext} from '../stores/AuthStore'
import {withRouter} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles';
import {Paper, Typography, FormControl, FormControlLabel, InputLabel, Input, Button, Checkbox} from '@material-ui/core'

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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const LoginPage = observer((props) => {
  const authStore = useContext(AuthStoreContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { classes } = props;

  const doLogin = () => {
      debugger;
      authStore.login(email, password)
      .then(user => {
        props.history.push('/home')
      })
      .catch(error => {

      })
  }
  console.log('Login')
  return (<div className={classes.main}>
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
        <FormControl margin="normal" required={true} fullWidth={true}>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} autoFocus={true}/>
        </FormControl>
        <FormControl margin="normal" required={true} fullWidth={true}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="password" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password"/>
        </FormControl>
        <FormControlLabel control={<Checkbox value = "remember" color = "primary" />} label="Remember me"/>
        <Button type="submit" fullWidth={true} variant="contained" color="primary" className={classes.submit} onClick={doLogin}>
          Sign in
        </Button>
      </form>
    </Paper>
  </div>)
});

export default withRouter(withStyles(styles)(LoginPage))
