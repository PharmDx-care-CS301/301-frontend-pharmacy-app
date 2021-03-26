import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Checkbox, FormControlLabel } from "@material-ui/core";
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

function PatientScheduling() {
  const classes = useStyles();
  const [yes, setYesState] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYesState(!yes);
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-basic"
              label="Prescription date"
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
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default PatientScheduling;
