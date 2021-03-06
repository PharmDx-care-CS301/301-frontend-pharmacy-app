import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Pharmacistlogin from "./pharmacist-login";
import PatientLogin from "./patient-login";
import logo from "./logo.png";
import Box from "@material-ui/core/Box";
import ChooserPage from "./ChooserPage";

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
      <Box display="flex" alignItems="center" flexDirection="column" width="611px" height="497px">
        <Box flexDirection="column" alignItems="center" display="flex"
             height="300px">
          <Router>
            <Switch>
              <Route path="/pharmacistlogin" component={Pharmacistlogin}/>
              <Route path="/patientlogin" component={PatientLogin}/>
              <Route path="/" component={ChooserPage}/>
            </Switch>
          </Router>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
