import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PharmacistLogin from "./components/login/pharmacist-login";
import PatientLogin from "./components/login/patient-login";
import logo from "./logo.png";
import Box from "@material-ui/core/Box";
import ChooserPage from "./components/landing/ChooserPage";
import PharmacistSignUp from "./components/signup/pharmacist-signup";
import FollowUpPage from "./components/follow-up/FollowUpPage";
import PatientScheduling from "./components/scheduling/patient-schedulling";
import PharmacistConfirm from "./components/signup/pharmacist-confirmation";
import CreateFollowUp from "./components/create-follow-up/create-follow-up";

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

function App() {
  const classes = useStyles();

  return (
    <Box
      className="App"
      display="flex"
      flexDirection="column"
      alignSelf="center"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100%"
        height="497px"
      >
        <Box
          flexDirection="column"
          alignItems="center"
          display="flex"
          height="300px"
          width="100%"
        >
          <Router>
            <Switch>
              <Route
                exact
                path="/patientscheduling"
                component={PatientScheduling}
              />
              <Route
                exact
                path="/pharmacistlogin"
                component={PharmacistLogin}
              />
              <Route exact path="/patientlogin" component={PatientLogin} />
              <Route
                exact
                path="/pharmacistSignUp"
                component={PharmacistSignUp}
              />
              <Route
                exact
                path="/pharmacistConfirm"
                component={PharmacistConfirm}
              />
              <Route exact path="/follow-up" component={FollowUpPage} />
              <Route exact path="/createFollowUp" component={CreateFollowUp} />
              <Route exact path="/" component={ChooserPage} />
              <Route path="/" component={() => <div>404</div>} />
            </Switch>
          </Router>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
