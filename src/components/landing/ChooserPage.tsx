import React from 'react';
import {
    Link
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../logo.png";
import {listPatients} from "../../graphql/queries";
import {API} from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';


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

async function TestAPI() {
    const apiData = await API.graphql({query: listPatients})

    console.log(JSON.stringify(apiData))
}

function ChooserPage(){
    const classes = useStyles();
    return (<>
        <img src={logo} className={classes.logo} alt="logo"/>
        <Link to="/pharmacistlogin">
            <Button className={classes.buttons} variant="contained" color="primary">
                Pharmacist Login
            </Button>
        </Link>
        <Link to="/patientlogin">
            <Button className={classes.buttons} variant="contained" color="primary" onClick={TestAPI}>
                Patient Login
            </Button>
        </Link>
    </>)
}

export default withAuthenticator(ChooserPage);
