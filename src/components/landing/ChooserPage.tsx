import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../logo.png";

const useStyles = makeStyles((theme) => ({
  buttons: {
    height: "36px",
    width: "194px",
    marginBottom: "15px",
    backgroundColor: "#2196F3",
  },
  logo: {
    height: "144px",
    backgroundColor: "white",
    marginBottom: "40px",
    marginTop: "60px",
  },
}));

function ChooserPage() {
  const classes = useStyles();
  return (
    <>
      <img src={logo} className={classes.logo} alt="logo" />
      <Link to="/follow-up">
        <Button className={classes.buttons} variant="contained" color="primary">
          Pharmacist Login
        </Button>
      </Link>
      <Link to="/patientlogin">
        <Button className={classes.buttons} variant="contained" color="primary">
          Patient Login
        </Button>
      </Link>
    </>
  );
}

export default ChooserPage;
