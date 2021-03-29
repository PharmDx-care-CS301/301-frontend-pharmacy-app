import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import logo from "../../logo.png";
import data from "./data.json";
import {
  AppBar,
  Box,
  Typography,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  Divider,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Auth, API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { createPharmacist } from "../../graphql/mutations";
import {
  getFollowUp,
  getPharmacist,
  listFollowUps,
} from "../../graphql/queries";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "144px",
    backgroundColor: "white",
    marginBottom: "40px",
    marginTop: "60px",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    width: "100%",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
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

function formatText(item) {
  return (
    item.name +
    " | Medication: " +
    item.medication +
    " | Symptoms Resolved: " +
    (item.symptomsResolved ? " Yes " : " False ") +
    "| " +
    item.timeStamp +
    " | " +
    item.nextFollowUp
  );
}

function FollowUpPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [pageData, setPageData] = React.useState([]);
  const history = useHistory();

  async function getFollowUpList(status: string) {
    let ret = await API.graphql({
      query: listFollowUps,
      variables: { filter: { follow_up_status: { eq: status } } },
    });

    setPageData(ret["data"]["listFollowUps"]["items"]);
    // setPageData(ret['data']['listFollowUps']['items'])
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function formatInputItem(item) {
    const date = item["updatedAt"];
    const conv = format(new Date(date), "hh:mm MMM dd, yyyy");
    return (
      <ListItem style={{ justifyContent: "spaceEvenly" }} button>
        <ListItemText secondary={secondary ? "Secondary text" : null}>
          {item["owner_id"]}
        </ListItemText>
        <ListItemText secondary={secondary ? "Secondary text" : null}>
          {item["contact_method"]}
        </ListItemText>
        <ListItemText
          secondary={secondary ? "Secondary text" : null}
          style={{ textAlign: "right" }}
        >
          {conv}
        </ListItemText>
      </ListItem>
    );
  }

  function formatHeader() {
    return (
      <ListItem style={{ textAlign: "center" }}>
        <ListItemText secondary={secondary ? "Secondary text" : null}>
          {"Patient"}
        </ListItemText>
        <Divider orientation="vertical" flexItem />
        <ListItemText secondary={secondary ? "Secondary text" : null}>
          {"Contact Method"}
        </ListItemText>
        <Divider orientation="vertical" flexItem />
        <ListItemText secondary={secondary ? "Secondary text" : null}>
          {"Date"}
        </ListItemText>
      </ListItem>
    );
  }
  const handleChange = (event, newValue) => {
    const lookUp = {
      0: "COMPLETED",
      1: "FOLLOWUPREQUESTED",
      2: "PENDINGRESPONSE",
      3: "TODO",
    };
    getFollowUpList(lookUp[newValue]);
    setValue(newValue);
  };

  function handleClick() {
    history.push("/patientscheduling");
  }

  return (
    <>
      <img src={logo} className={classes.logo} alt="logo" />
      <div className={classes.container}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
          >
            <Tab label="Completed" {...a11yProps(0)} />
            <Tab label="Requested In Person" {...a11yProps(1)} />
            <Tab label="Sent" {...a11yProps(2)} />
            <Tab label="Future(Not Sent)"> Future (not sent) </Tab>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className={classes.demo}>
            <List dense={dense}>
              {formatHeader()}
              <Divider />
              {pageData.map((item) => (
                <div>
                  {formatInputItem(item)}
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={classes.demo}>
            {formatHeader()}
            <Divider />
            <List dense={dense}>
              {pageData.map((item) => (
                <div>
                  {formatInputItem(item)}
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={classes.demo}>
            {formatHeader()}
            <Divider />
            <List dense={dense}>
              {pageData.map((item) => (
                <div>
                  {formatInputItem(item)}
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className={classes.demo}>
            <List dense={dense}>
              {formatHeader()}
              <Divider />
              {pageData.map((item) => (
                <div>
                  <ListItem>
                    <ListItemText
                      secondary={secondary ? "Secondary text" : null}
                    >
                      {formatInputItem(item)}
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        </TabPanel>

        <Fab
          color="primary"
          aria-label="add"
          onClick={handleClick}
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  );
}

export default withAuthenticator(FollowUpPage);
