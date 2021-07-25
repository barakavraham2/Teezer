import React, { useState } from 'react';
import { Grid } from 'rsuite'
import { Input, Message } from 'rsuite'
import { Button } from 'rsuite'
import { CircularProgress } from '@material-ui/core';
import * as emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import { validateContactUs } from '../helpers/contact'

const ContactUsForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrormessage] = useState('')
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        const form = { firstName, lastName, email, message };
        console.log(form)
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
                setErrormessage('')
            }, function (err) {

            });
    }
    return (
        <>
            <Grid item xs={12} sm={6}>
                <input
                    required
                    name="firstName"
                    label="First name"
                    onChange={e => setFirstName(e.target.value)}
                    style={{ background: 'transparent ' }}
                    placeholder="First name"
                    type="text"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <input
                    required
                    name="lastName"
                    label="Last name"
                    onChange={e => setLastName(e.target.value)}
                    style={{ background: 'transparent ' }}
                    type="text"
                    placeholder="Last name"
                />
            </Grid>
            <Grid item xs={12}>
                <input
                    required
                    name="Email"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    style={{ background: 'transparent ' }}
                    type="text"
                    placeholder="Email"
                />
            </Grid>
            <Grid item xs={12}>
                <input
                    name="Message"
                    label="Message"
                    componentClass="textarea"
                    rows={6}
                    style={{ background: 'transparent ' }}
                    placeholder="Message..."
                    type="text"
                    onChange={e => setMessage(e.target.value)}
                />
            </Grid>
            <Grid style={{ textAlign: 'center' }}>
                {errorMessage && <Message type="error" description={String(errorMessage)}></Message>}
            </Grid>
            <Grid item xs={12}>
                <Button onClick={handleSubmit}>
                    Submit {loading && <CircularProgress />}
                </Button>
            </Grid>
        </>
    );
}

export default ContactUsForm;