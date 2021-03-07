import React from "react";
import logo from "../../logo.png";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2196F3"
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#2196F3',
    height: '36px',
    width: '100px'
  },
  logo: {
    height: '144px',
    backgroundColor: 'white',
    marginBottom: '39px',
    marginTop: '39px'
  },
    signup: {
        backgroundColor: '#ffffff',
        height: '36px',
        width: 'auto',
    },
    linkStyle: {
      textDecoration: "none"
    }

}));

function PharmacistLogin() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      width="433px"
      height="525px"
      bgcolor="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img src={logo} alt="logo" className={classes.logo} />
      <Box
        className="input-container"
        width="337px"
        height="240px"
        bgcolor="white"
        flexDirection="column"
        alignItems="center"
        display="flex"
      >
        <TextField
          required
          id="outlined-basic"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          style={{
            height: 60,
            width: 302,
            padding: 0,
            paddingBottom: 0,
            marginBottom: 15,
            marginTop: 15,
          }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          style={{
            height: 60,
            width: 302,
            marginBottom: 15,
          }}
        />
        <Link to="/" className={classes.linkStyle}>
          <Button className={classes.signup} fullWidth>
            Forgot password?
          </Button>
        </Link>
        <Link to="/pharmacistSignUp" className={classes.linkStyle}>
          <Button className={classes.signup} fullWidth>
            Don't have an account? SignUp!
          </Button>
        </Link>

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
        </Box>
      </Box>
  );
}

export default PharmacistLogin;
