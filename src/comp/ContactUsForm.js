import React, { useState } from 'react';
import { Grid } from 'rsuite'
import { Input, Message } from 'rsuite'
import { Button } from 'rsuite'
import { CircularProgress } from '@material-ui/core';
import * as emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import { validateContactUs } from '../helpers/contact'

function ContactUsForm() {
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
            <Grid xs={12} sm={6}>
                <Input
                    name="firstName"
                    label="First name"
                    onChange={(id, e) => { e.preventDefault(); setFirstName(e.target.value) }}
                    style={{ background: 'transparent ' }}
                    placeholder="First name"
                    type="text"
                />
            </Grid>
            <Grid xs={12} sm={6}>
                <Input
                    name="lastName"
                    label="Last name"
                    onChange={(id, e) => { e.preventDefault(); setLastName(e.target.value) }}
                    style={{ background: 'transparent ' }}
                    type="text"
                    placeholder="Last name"
                />
            </Grid>
            <Grid xs={12}>
                <Input
                    name="Email"
                    label="Email"
                    onChange={(id, e) => { e.preventDefault(); setEmail(e.target.value) }}
                    style={{ background: 'transparent ' }}
                    type="text"
                    placeholder="Email"
                />
            </Grid>
            <Grid xs={12}>
                <Input
                    name="Message"
                    label="Message"
                    componentClass="textarea"
                    rows={6}
                    style={{ background: 'transparent ' }}
                    placeholder="Message..."
                    type="text"
                    onChange={(id, e) => { e.preventDefault(); setMessage(e.target.value) }}
                />
            </Grid>
            <Grid style={{ textAlign: 'center' }}>
                {errorMessage && <Message type="error" description={errorMessage.toString()}></Message>}
            </Grid>
            <Grid xs={12}>
                <Button onClick={handleSubmit}>
                    Submit {loading && <CircularProgress />}
                </Button>
            </Grid>
        </>
    );
}

export default ContactUsForm;