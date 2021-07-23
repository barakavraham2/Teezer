import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContactForm from './ContactForm'

import { Content } from 'rsuite';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));



export default function ContectUs() {
    const classes = useStyles();


    return (
        <>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper} style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <Typography component="h1" variant="h4" align="center" style={{ fontFamily: 'Montserrat' }}>
                        Contact Us
                    </Typography>
                    <ContactForm />
                    <div className={classes.buttons}>
                        <Button onClick={null} className={classes.button}>
                            Submit
                        </Button>
                    </div>
                </Paper>
            </main>
        </>
    );
}