import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Input, Message } from 'rsuite'
import * as emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import { validateContactUs } from '../helpers/contact'
import { CircularProgress } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Fade from 'react-reveal/Fade';
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
    const [loading, setLoading] = useState(false);
    const [scoping, setScoping] = useState(3)
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrormessage] = useState()
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const handleSubmit = () => {
        if (!loading) {
            setLoading(true)
        }
        const { error } = validateContactUs(form)
        if (error) {
            setLoading(false)
            setErrormessage(error)
            return;
        }
        init("user_oh6qaIVQB2ErFmggHqScp");
        emailjs.send('service_we1c55s', 'template_i89x2f3', form)
            .then(function (response) {
                setLoading(false)
                setScoping(0)
                setSuccess(true)
                setErrormessage('')
            }, function (err) {

            });
    }
    return (
        <>
            <main className={classes.layout} >
                <Paper className={classes.paper} style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <Typography component="h1" variant="h4" align="center" style={{ fontFamily: 'Montserrat' }}>
                        Contact Us
                    </Typography>
                    <Grid container spacing={3} style={{ textAlign: 'center' }} >
                        {!success && <>      <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="outlined-basic"
                                name="firstName"
                                label="First name"
                                fullWidth
                                onChange={(e) => { setForm({ ...form, firstName: e.target.value }) }}
                            />
                        </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    onChange={(e) => { setForm({ ...form, lastName: e.target.value }) }}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    name="Email"
                                    label="Email"
                                    fullWidth
                                    onChange={(e) => { setForm({ ...form, email: e.target.value }) }}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    id="outlined-basic"
                                    name="Message"
                                    label="Message"
                                    componentClass="textarea"
                                    rows={8}
                                    style={{ background: 'transparent ' }}
                                    placeholder="Message..."

                                    onChange={(id, e) => { setForm({ ...form, message: e.target.value }) }}

                                />
                            </Grid>
                        </>
                        }

                        {success && <>
                            <Fade up>
                                <Grid item xs={12} className="align-items-xs-center" >
                                    <CheckCircleOutlineIcon style={{ color: 'green', fontSize: '200px' }} />
                                </Grid>
                            </Fade>
                        </>}
                        <Grid style={{ textAlign: 'center' }}>
                            {errorMessage && <Message type="error" description={String(errorMessage)}></Message>}
                        </Grid>
                    </Grid>
                    <div className={classes.buttons}>
                        {!success && <Button onClick={handleSubmit} className={classes.button}>
                            Submit      {loading && <CircularProgress />}
                        </Button>}

                    </div>
                </Paper>
            </main>
        </>
    );
}