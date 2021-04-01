import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PharmacistLogin from "./components/login/pharmacist-login";
import PatientLogin from "./components/login/patient-login";
import logo from "./logo.png";
import Box from "@material-ui/core/Box";
import ChooserPage from "./components/landing/ChooserPage";
import PharmacistSignUp from "./components/signup/pharmacist-signup";
import FollowUpPage, { PatientData } from "./components/follow-up/FollowUpPage";
import PatientScheduling from "./components/scheduling/patient-schedulling";
import PharmacistConfirm from "./components/signup/pharmacist-confirmation";
import CreateFollowUp from "./components/create-follow-up/create-follow-up";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";


const useStyles = makeStyles((theme) => ({
  header: {
    zIndex: 90
  },
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    textDecoration: "none",
  },
}));

class MenuIcon extends React.Component {
  render() {
    return null;
  }
}



const ProtectedRoute: React.FC<any> = (props) => (
  <Route
    {...props}
    component={withAuthenticator(props.component)}
  />
);

function App() {
  const classes = useStyles();
  const [patientData, setPatientData] = useState<PatientData>({
    completed:undefined,
    followuprequested: undefined,
    pendingresponse: undefined,
    todo: undefined
  });

  function createFollowUpPage() {
    // @ts-ignore
    return (
      <FollowUpPage patientData={patientData} setPatientData={setPatientData} />
    );
  }

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
            <AppBar position="static" className={classes.header}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  PharmDX
                </Typography>
                <Link to="/survey" className={classes.linkStyle}>
                  <Button style={{ color: "#ffffff" }}>Survey</Button>
                </Link>
                <Link to="/follow-up" className={classes.linkStyle}>
                  <Button style={{ color: "#ffffff" }}>View Follow Up</Button>
                </Link>
                <Link to="/patientscheduling" className={classes.linkStyle}>
                  <Button style={{ color: "#ffffff" }}>Create Follow Up</Button>
                </Link>
                <Link to="/follow-up" className={classes.linkStyle}>
                  <Button
                    style={{ color: "#ffffff" }}
                    onClick={async () => {
                      await Auth.signOut();
                      window.location.reload(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </Link>
              </Toolbar>
            </AppBar>
            <Switch>
              <ProtectedRoute
                exact
                path="/patientscheduling"
                component={PatientScheduling}
              />
              <ProtectedRoute
                exact
                path="/pharmacistlogin"
                component={PharmacistLogin}
              />
              <ProtectedRoute exact path="/patientlogin" component={PatientLogin} />
              <ProtectedRoute
                exact
                path="/pharmacistSignUp"
                component={PharmacistSignUp}
              />
              <ProtectedRoute
                exact
                path="/pharmacistConfirm"
                component={PharmacistConfirm}
              />
              <ProtectedRoute exact path="/follow-up" component={createFollowUpPage} />
              <ProtectedRoute exact path="/createFollowUp" component={CreateFollowUp} />
              <ProtectedRoute exact path="/survey" component={() => {
                window.location.href="https://main.d65b59pejnjsy.amplifyapp.com";
                return null;
              }} />
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
