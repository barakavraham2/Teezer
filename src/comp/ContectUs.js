import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 'auto'
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



function ContectUs() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [displayCircle, setDisplay] = useState('none')
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
                setDisplay('flex')
                setSuccess(true)
                setErrormessage('')
            }, function (err) {

            });
    }
    return (
        <>

            <div className={classes.paper} style={{ backgroundColor: "rgba(255,255,255,0.2)", zIndex: '200' }}>
                <h1 style={{ fontFamily: 'Montserrat' }}>
                    Contact Us
                </h1>
                <Grid container={(!success)} spacing={3} style={{ textAlign: 'center' }} >
                    {(!success) && <>      <Grid item xs={12} sm={6}>
                        <Input
                            required
                            name="firstName"
                            label="First name"
                            onChange={(e) => { setForm({ ...form, firstName: e.target.value }) }}
                            style={{ background: 'transparent ' }}
                            placeholder="First name"
                        />
                    </Grid>
                        <Grid item xs={12} sm={6}>
                            <Input
                                required
                                name="lastName"
                                label="Last name"
                                onChange={(e) => { setForm({ ...form, lastName: e.target.value }) }}
                                style={{ background: 'transparent ' }}
                                placeholder="Last name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                required
                                name="Email"
                                label="Email"
                                onChange={(e) => { setForm({ ...form, email: e.target.value }) }}
                                style={{ background: 'transparent ' }}
                                placeholder="Email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                name="Message"
                                label="Message"
                                componentClass="textarea"
                                rows={6}
                                style={{ background: 'transparent ' }}
                                placeholder="Message..."

                                onChange={(id, e) => { setForm({ ...form, message: e.target.value }) }}

                            />
                        </Grid>
                    </>
                    }

                    {success && <>
                        <Fade up>
                            <Grid item xs={12} className="align-items-xs-center" style={{ display: displayCircle }} >
                                <CheckCircleOutlineIcon style={{ color: 'green', fontSize: '200px' }} />
                            </Grid>
                        </Fade>
                    </>}
                    <Grid style={{ textAlign: 'center' }}>
                        {errorMessage && <Message type="error" description={String(errorMessage)}></Message>}
                    </Grid>
                </Grid>
                <div className={classes.buttons}>
                    {(!success) && <Button onClick={handleSubmit} className={classes.button}>
                        Submit      {loading && <CircularProgress />}
                    </Button>}

                </div>
            </div>
        </>
    );
}

export default memo(ContectUs);