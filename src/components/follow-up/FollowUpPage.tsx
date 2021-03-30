import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../../logo.png";
import data from "./data.json";
import {AppBar, Box, Typography, Tab, Tabs, List, ListItem, ListItemText, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@material-ui/core";


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
    table: {
        minWidth: 200,
      },
}));

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

function CreateTable(rows){
    const classes = useStyles();
    return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Medication</TableCell>
            <TableCell align="right">Symptoms Resolved?</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Next Follow Up</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.medication}</TableCell>
              <TableCell align="right">{row.symptomsResolved.toString()}</TableCell>
              <TableCell align="right">{row.timeStamp}</TableCell>
              <TableCell align="right">{row.nextFollowUp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

function FollowUpPage(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(data)
    return (<>
        <img src={logo} className={classes.logo} alt="logo"/>
        <div className={classes.container}>
            <AppBar style={{backgroundColor: "#2d9cdb"}} position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                    <Tab label="Completed" {...a11yProps(0)} />
                    <Tab label="Requested In Person" {...a11yProps(1)} />
                    <Tab label="Sent" {...a11yProps(2)} />
                    <Tab label="Future(Not Sent)"> Future (not sent) </Tab>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {CreateTable(data["completed"])}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {CreateTable(data["requested"])}
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </div>
    </>)
}

export default FollowUpPage;