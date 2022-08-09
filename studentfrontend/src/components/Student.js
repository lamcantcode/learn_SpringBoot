import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            //margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Student() {
    const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" }
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const classes = useStyles();
    const handleClick = (e) => {
        e.preventDefault()
        const student = { name, address }

        fetch("http://localhost:8080/student/add", {
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(student)
        }).then(() => {
            console.log("New Student added");
        })
    }
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Student name" variant="outlined" style={{ width: '100%' }}
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <br /><br />
                    <TextField id="outlined-basic" label="Student address" variant="outlined" style={{ width: '100%' }}
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                    />
                    <br /><br />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button>
                </form>

            </Paper>
        </Container>
    );
}
