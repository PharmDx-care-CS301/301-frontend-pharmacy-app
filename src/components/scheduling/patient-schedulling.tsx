import React from "react";
import logo from "../../logo.png";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Auth, API } from "aws-amplify";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { useSnackbar } from "notistack";
import {
  createPatient,
  createAssessment,
  createFollowUp,
} from "../../graphql/mutations";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2196F3",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2196F3",
    height: "36px",
    width: "100px",
  },
  logo: {
    height: "144px",
    backgroundColor: "white",
    marginBottom: "39px",
    marginTop: "39px",
  },
  signup: {
    backgroundColor: "#ffffff",
    height: "36px",
    width: "auto",
  },
  linkStyle: {
    textDecoration: "none",
  },
}));

interface IFormData {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  postalCode?: string;
  phoneNumber?: string;
  prescriptionDate?: string;
  contactMethod?: string;
  email?: string;
}

const PatientScheduling: React.FC<any> = (props) => {
  const classes = useStyles();
  const [yes, setYesState] = React.useState(true);
  const [state, setState] = React.useState<IFormData>({
    contactMethod: "",
    prescriptionDate: moment().format("YYYY-MM-DD"),
  });
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYesState(!yes);
  };

  const updateFirstName = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === state.firstName) {
      return;
    }
    let newState = { ...state, firstName: event.target.value };
    setState(newState);
  };

  const updateLastName = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === state.lastName) {
      return;
    }
    let newState = { ...state, lastName: event.target.value };
    setState(newState);
  };

  const updateDateOfBirth = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === state.dateOfBirth) {
      return;
    }
    let newState = { ...state, dateOfBirth: event.target.value };
    setState(newState);
  };

  const updatePostalCode = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === state.postalCode) {
      return;
    }
    let newState = { ...state, postalCode: event.target.value };
    setState(newState);
  };

  const updatePrescriptionDate = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    if (event.target.value === state.prescriptionDate) {
      return;
    }
    let newState = { ...state, prescriptionDate: event.target.value };
    setState(newState);
  };

  const updatePhoneNumber = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === state.phoneNumber) {
      return;
    }
    let newState = { ...state, phoneNumber: event.target.value };
    setState(newState);
  };

  const updateContactMethod = (event) => {
    if (event.target.value === state.contactMethod) {
      return;
    }
    setState({ ...state, contactMethod: event.target.value });
  };

  const updateEmail = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === state.email) {
      return;
    }
    setState({ ...state, email: event.target.value });
  };

  const printState = async (event) => {
    // Validate form fields
    // Create a patient
    //      Save Cognito ID of logged in user
    //      Call GraphQL API and do create patient call, save return value
    //      Check return value for errors
    //      Display error message if error occurs
    //      Save the patient UID
    // Create an assessment
    //      Check current Pharmacy ID
    //      Check Cognito ID
    //      Check Patient ID
    //      Use GraphQL to create assessment
    //      Check return value for errors
    //      Save UID of new assessment
    // Create a follow up
    //      Need assessment ID
    //      Use GraphQL to create followup
    //      Check return value for errors
    //      Save UID of new follow up

    let cognitoUser = Promise.resolve(Auth.currentUserInfo());
    let cognitoID;
    try {
      await cognitoUser.then(
        function (data) {
          cognitoID = data.attributes.sub;
          return data.attributes.sub;
        },
        function (error) {
          displayError(error);
        }
      );
    } catch (e) {
      displayError(e.message);
    }

    const followUp = {
      followUpForAssessmentId: "",
      contact_method: state.contactMethod,
      owner_id: cognitoID,
      follow_up_status: "COMPLETED",
    };

    const assessment = {
      date: moment(state.prescriptionDate).format("YYYY-MM-DD[T]HH:mm:ss[Z]"),
      description: "Appointment",
      assessmentPerformedAtId: "1", // this most likely will be a query to grab the pharmacy that we get through an input
      assessmentAssessedForId: "",
      assessmentAssessedById: cognitoID,
      owner_id: cognitoID,
    };

    const patient = {
      dob: state.dateOfBirth,
      email: state.email,
      first_name: state.firstName,
      phone_number: state.phoneNumber,
      last_name: state.lastName,
      postal_code: state.postalCode,
      owner_id: cognitoID,
    };
    try {
      let ret = await API.graphql({
        query: createPatient,
        variables: { input: patient },
      });
      try {
        let newPatientID = ret["data"]["createPatient"]["id"];
        assessment.assessmentAssessedForId = newPatientID;
      } catch (e) {
        displayError(e.message);
      }
    } catch (e) {
      if (e.errors != undefined) {
        displayError(e.errors[0].message);
      }
    } finally {
    }

    try {
      let ret = await API.graphql({
        query: createAssessment,
        variables: { input: assessment },
      });
      try {
        let newAssessmentID = ret["data"]["createAssessment"]["id"];
        followUp.followUpForAssessmentId = newAssessmentID;
      } catch (e) {
        displayError(e.message);
      }
    } catch (e) {
      displayError(e.errors[0].message);
    } finally {
    }
    try {
      let ret = await API.graphql({
        query: createFollowUp,
        variables: { input: followUp },
      });
      try {
        let newFollowUpID = ret["data"]["createFollowUp"]["id"];
        displaySuccess("Successfully created");

        history.push("/follow-up");
      } catch (e) {
        displayError(e.message);
      }
    } catch (e) {
      displayError(e.errors[0].message);
    } finally {
    }
  };

  const displayError = (message) => {
    enqueueSnackbar(<p>{message}</p>, {
      variant: "error",
    });
  };

  const displaySuccess = (message) => {
    enqueueSnackbar(<p>{message}</p>, {
      variant: "success",
    });
  };

  return (
    <Box
      className={classes.root}
      width="60%"
      height="525px"
      bgcolor="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img src={logo} alt="logo" className={classes.logo} />
      <Box
        className="input-container"
        width="100%"
        height="240px"
        bgcolor="white"
        flexDirection="column"
        alignItems="center"
        display="flex"
      >
        <Grid container spacing={8}>
          <Grid item xs>
            <TextField
              required
              id="outlined-basic"
              label="First Name"
              type="text"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                height: 60,
                width: "100%",
                padding: 0,
                marginBottom: 15,
              }}
              onBlur={updateFirstName}
            />
            <TextField
              required
              id="outlined-basic"
              label="Last Name"
              type="text"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                height: 60,
                width: "100%",
                marginBottom: 15,
              }}
              onBlur={updateLastName}
            />
            <TextField
              required
              id="outlined-basic"
              label="Email"
              type="text"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                height: 60,
                width: "100%",
                marginBottom: 15,
              }}
              onBlur={updateEmail}
            />
            <TextField
              required
              id="outlined-basic"
              label="DOB"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                height: 60,
                width: "100%",
                marginBottom: 15,
              }}
              onBlur={updateDateOfBirth}
            />
            <TextField
              required
              id="outlined-basic"
              label="Postal Code"
              type="text"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                height: 60,
                width: "100%",
                marginBottom: 15,
              }}
              onBlur={updatePostalCode}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              variant="outlined"
              style={{
                height: 60,
                width: "100%",
                marginBottom: 15,
              }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Contact Method
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.contactMethod}
                onChange={updateContactMethod}
                label="Contact Method"
              >
                <MenuItem value={"SMS"}>SMS</MenuItem>
                <MenuItem value={"EMAIL"}>Email</MenuItem>
                <MenuItem value={"PHARMACY"}>Pharmacy</MenuItem>
              </Select>
            </FormControl>
            <TextField
              required
              id="outlined-basic"
              label="Prescription date"
              defaultValue={state.prescriptionDate}
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                height: 60,
                width: "100%",
                marginBottom: 15,
              }}
              onBlur={updatePrescriptionDate}
            />
            <TextField
              required
              fullWidth
              multiline={true}
              rows={5}
              id="outlined-basic"
              label="Description"
              type="text"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                height: 135,
                width: "100%",
                marginBottom: 15,
              }}
            />
            <TextField
              required
              id="outlined-basic"
              label="Cellphone number"
              type="tel"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                height: 60,
                width: "100%",
                marginBottom: 15,
              }}
              onBlur={updatePhoneNumber}
            />
          </Grid>
        </Grid>
        <h3> Patient verbal consent for follow up</h3>
        <FormControlLabel
          control={<Checkbox checked={yes} onChange={handleChange} />}
          label="Yes"
          style={{
            width: 50,
          }}
        />

        <FormControlLabel
          control={<Checkbox checked={!yes} onChange={handleChange} />}
          label="No"
          style={{
            width: 50,
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={printState}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default withAuthenticator(PatientScheduling);
