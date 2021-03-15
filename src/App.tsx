import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PharmacistLogin from "./components/login/pharmacist-login";
import PatientLogin from "./components/login/patient-login";
import Box from "@material-ui/core/Box";
import ChooserPage from "./components/landing/ChooserPage";
import PharmacistSignUp from "./components/signup/pharmacist-signup";
import FollowUpPage from "./components/follow-up/FollowUpPage";
import PatientScheduling from "./components/scheduling/patient-schedulling";

const useStyles = makeStyles((theme) => ({
  buttons: {
    height: '36px',
    width: '194px',
    marginBottom: '15px',
    backgroundColor: '#2196F3'
  },
  logo: {
    height: '144px',
    backgroundColor: 'white',
    marginBottom: '40px',
    marginTop: '60px'
  }
}));


function App() {
  const classes = useStyles();

  return (
      <Box className="App" display="flex" flexDirection="column" alignSelf="center" alignItems="center">
        <Box display="flex" alignItems="center" flexDirection="column" width="100%" height="497px">
          <Box flexDirection="column" alignItems="center" display="flex"
               height="300px" width="100%">
            <Router>
              <Switch>
                <Route path="/patientscheduling" component={PatientScheduling}/>
                <Route path="/pharmacistlogin" component={PharmacistLogin}/>
                <Route path="/patientlogin" component={PatientLogin}/>
                <Route path="/pharmacistSignUp" component={PharmacistSignUp}/>
                <Route path="/follow-up" component={FollowUpPage}/>
                <Route path="/" component={ChooserPage}/>
              </Switch>
            </Router>
          </Box>
        </Box>
      </Box>
  );
}

export default App;