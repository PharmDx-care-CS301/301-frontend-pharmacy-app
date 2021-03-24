import logo from "../../logo.png";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


const useStyles = makeStyles((theme) => ({
    logo: {
        height: '144px',
        backgroundColor: 'white',
        marginBottom: '40px',
        marginTop: '60px'
    },
}));

function CreateFollowUp() {


    const classes = useStyles();
    const [appointmentType, setAppointmentType] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );

    function changeAppointmentType(event) {
        setAppointmentType(event.target.value);
    }
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };


    return (
        <>
            <img src={logo} className={classes.logo} alt="logo"/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{width: 300}}
                    /><br/>
                </MuiPickersUtilsProvider>
                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Appointment Type</InputLabel>
                    <Select
                        id="demo-simple-select-outlined"
                        label="Appointment Type"
                        value={appointmentType}
                        style={{width: 300}}
                        onChange={changeAppointmentType}
                        variant="outlined"
                    >
                        <MenuItem value={"Minor Ailment Appointment"}>Minor Ailment Appointment</MenuItem>
                        <MenuItem value={"MedsCheck Appointment"}>MedsCheck Appointment</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                </FormControl><br/>
                <TextField
                    id="outlined-multiline-static"
                    label="If Other selected, what is the type of appointment"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{width: 300}}
                />
            </>
    )
}


export default CreateFollowUp;