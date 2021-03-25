import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import logo from "../../logo.png";
import data from "./data.json";
import {AppBar, Box, Typography, Tab, Tabs, List, ListItem, ListItemText, Divider, Fab, Link} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Amplify, { Auth, API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {createPharmacist} from '../../graphql/mutations'
import {getPharmacist} from '../../graphql/queries'


const useStyles = makeStyles((theme) => ({
    logo: {
        height: '144px',
        backgroundColor: 'white',
        marginBottom: '40px',
        marginTop: '60px'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        width: "100%"
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

function stuff(e: any) {
    console.log(Auth.currentUserInfo())
}

async function createAPharmacist() {
    await API.graphql({ query: createPharmacist, variables: { input: {cognito_id: "cognitoid", first_name: "Janee", id: "7", last_name: "Doe", pharmacist_number: "121", pharmacy_ids: "[\"3\"]"} } });
}

async function checkForExistingGUID(guid: string) {
    await API.graphql({ query: getPharmacist, variables: {input: {id: guid}}});
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function formatText(item) {
    return item.name + " | Medication: " + item.medication + ' | Symptoms Resolved: ' + (item.symptomsResolved ? ' Yes ': ' False ') + '| ' + item.timeStamp + ' | ' + item.nextFollowUp
}


interface IFollowUpPage {}


const FollowUpPage: React.FC<IFollowUpPage> = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleClick() {
        history.push("/createFollowUp");
    };

    return (<>
        <img src={logo} className={classes.logo} alt="logo"/>
        <div className={classes.container}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                    <Tab label="Completed" {...a11yProps(0)} />
                    <Tab label="Requested In Person" {...a11yProps(1)} />
                    <Tab label="Sent" {...a11yProps(2)} />
                    <Tab label="Future(Not Sent)"> Future (not sent) </Tab>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className={classes.demo}>
                    <List dense={dense}>
                        {data.completed.map((item) => (
                            <div>
                                <ListItem>
                                    <ListItemText
                                        primary={formatText(item)}
                                        secondary={secondary ? 'Secondary text' : null}
                                    >  </ListItemText>
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>


            <Fab color="primary" aria-label="add" onClick={handleClick}
                style={{
                    position: "absolute",
                    bottom: 30,
                    right: 30,
                }}>
                    <AddIcon />
            </Fab>
            <button onClick={stuff}>Button</button>
        </div>
    </>)
}

export default withAuthenticator(FollowUpPage);
