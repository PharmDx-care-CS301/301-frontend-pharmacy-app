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

function PharmacistSignUp() {
    const classes = useStyles();

    return (
        <Box className={classes.root} width="433px" height="525px" bgcolor="white" display="flex" flexDirection="column"
             alignItems="center">
            <img src={logo} alt="logo" className={classes.logo}/>
            <Box className="input-container" width="337px" height="240px" bgcolor="white" flexDirection="column"
                 alignItems="center" display="flex">
                <TextField
                    required
                    id="outlined-basic"
                    name="name"
                    label="Pharmacy Name"
                    variant="outlined"
                    style={{
                        height: 60,
                        width: 302,
                        padding: 0,
                        paddingBottom: 0,
                        marginBottom: 15,
                        marginTop: 15
                    }}
                />
                <TextField
                    required
                    id="outlined-basic"
                    name="email"
                    label="Pharmacy Email"
                    type="email"
                    variant="outlined"
                    style={{
                        height: 60,
                        width: 302,
                        padding: 0,
                        paddingBottom: 0,
                        marginBottom: 15,
                    }}
                />
                <TextField
                    required
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    style={{
                        height: 60,
                        width: 302,
                        padding: 0,
                        paddingBottom: 0,
                        marginBottom: 15,
                    }}
                />

                <Link to="/pharmacistlogin" className={classes.linkStyle}>
                    <Button className={classes.signup} fullWidth>Already have an account? Sign In!</Button>
                </Link>

                <Link to="/pharmacistConfirm">
                    <Button className={classes.submit} variant="contained" color="primary">
                        Sign Up
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

export default PharmacistSignUp;
