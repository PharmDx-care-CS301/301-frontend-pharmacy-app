import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import logo from "../../logo.png";
import data from "./data.json";
import { AppBar, Box, Typography, Tab, Tabs,
  Fab, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Auth, API } from "aws-amplify";
import {listFollowUps,} from "../../graphql/queries";
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
  table: {
    minWidth: 200,
  },
}));

interface TabPanelInterface {
  children: any;
  value:number;
  index: number;
}

const TabPanel:React.FC<TabPanelInterface> = (props)=> {
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
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export interface FollowUpProps {
  patientData: PatientData;
  setPatientData: Function;
}

export interface PatientData {
  completed?: [];
  followuprequested?: [];
  pendingresponse?: [];
  todo?: [];
}

const FollowUpPage: React.FC<FollowUpProps> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [pageData, setPageData] = React.useState<any>([]);
  const history = useHistory();
  const numEffect = 1

  //only called once
  /**Caution: If screen gets into infinite loop, kindly delete this code**/
  /**This call makes sure to get data when component gets mounted**/
  useEffect(()=>{handleChange(null, value)}, [])

  function updateProps(status, values){
    /**NOTE: This code runs slow s.t. screen gets updated and all states reinitialized**/
    /**TODO: Find alternative way of updating props.setPageData**/
    if (status === "COMPLETED" && values.length > 0) {
      props.setPatientData({...props.patientData, "completed": values})
    }
    else if (status === "FOLLOWUPREQUESTED" && values.length > 0) {
      props.setPatientData({...props.patientData, "followuprequested": values})
    }
    else if (status === "PENDINGRESPONSE" && values.length > 0) {
      props.setPatientData({...props.patientData, "pendingresponse": values})
    }
    else if (status === "TODO" && values.length > 0) {
      props.setPatientData({...props.patientData, "todo": values})
    }
  }

  async function getFollowUpList(status: string) {
    switch (status) {
      case "COMPLETED":
        if (props.patientData.completed === undefined) {
          const ret = await API.graphql({
            query: listFollowUps,
            variables: { filter: { follow_up_status: { eq: status } } },
          });
          const values = ret["data"]["listFollowUps"]["items"]
          setPageData(values)

          // props.setPatientData({...props.patientData, "completed": values})
        }
        else{
          setPageData(props.patientData.completed);
        }

        break;
      case "FOLLOWUPREQUESTED":
        if (props.patientData.followuprequested === undefined) {
          const ret = await API.graphql({
            query: listFollowUps,
            variables: { filter: { follow_up_status: { eq: status } } },
          });
          const values = ret["data"]["listFollowUps"]["items"]
          setPageData(values)
          // props.setPatientData({...props.patientData, "followuprequested": values})
        }
        else{
          setPageData(props.patientData.followuprequested);
        }

        break;
      case "PENDINGRESPONSE":
        if (props.patientData.pendingresponse === undefined) {
          const ret = await API.graphql({
            query: listFollowUps,
            variables: { filter: { follow_up_status: { eq: status } } },
          });
          const values = ret["data"]["listFollowUps"]["items"]
          setPageData(values)

        }
        else {
          setPageData(props.patientData.pendingresponse);
        }

        break;
      case "TODO":
        if (props.patientData.todo === undefined) {
          const ret = await API.graphql({
            query: listFollowUps,
            variables: { filter: { follow_up_status: { eq: status } } },
          });
          const values = ret["data"]["listFollowUps"]["items"]
          setPageData(values)
        }
        else {
          setPageData(props.patientData.todo);
        }

        break;
      default:
        console.error(
          `Unknown STATUS provided for querying patient data. STATUS:${status}`
        );
        break;
    }

  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = async (event, newValue) => {
    const lookUp = {
      0: "COMPLETED",
      1: "FOLLOWUPREQUESTED",
      2: "PENDINGRESPONSE",
      3: "TODO",
    };
    getFollowUpList(lookUp[newValue]).then(()=>{
      setValue(newValue);
      // updateProps(lookUp[newValue]);
    })

  };

  function handleClick() {
    history.push("/patientscheduling");
  }
  function CreateTable(rows){
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Patient</TableCell>
                <TableCell align="right">Contact method</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" align="left">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.owner_id}</TableCell>
                    <TableCell align="right">{row.contact_method}</TableCell>
                    <TableCell align="right">{format(new Date(row.updatedAt), "hh:mm MMM dd, yyyy")}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    )
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
          {CreateTable(pageData)}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {CreateTable(pageData)}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {CreateTable(pageData)}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {CreateTable(pageData)}
        </TabPanel>

        <Fab
          color="primary"
          aria-label="add"
          onClick={handleClick}
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};

export default FollowUpPage;
