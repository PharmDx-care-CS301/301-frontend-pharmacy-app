import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "../../logo.png";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2196F3",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "36px",
    width: "100px",
    backgroundColor: "#2196F3",
  },
  logo: {
    height: "144px",
    backgroundColor: "white",
    marginBottom: "39px",
    marginTop: "39px",
  },
  text: {
    height: "60px",
    width: "302px",
    marginBottom: "15px",
    marginTop: "15px",
  },
}));

function PatientLogin() {
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
          className={classes.text}
          id="outlined-basic"
          label="Survey Code"
          variant="outlined"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default PatientLogin;
