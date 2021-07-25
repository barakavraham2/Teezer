import React, { useState } from 'react';
import { Grid } from 'rsuite'
import { Input, Message } from 'rsuite'
import { Button } from 'rsuite'
import { CircularProgress } from '@material-ui/core';
import * as emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import { validateContactUs } from '../helpers/contact'

function ContactUsForm() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errorMessage, setErrormessage] = useState('')
    const [loading, setLoading] = useState(false);

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
                setErrormessage('')
            }, function (err) {

            });
    }
    return (
        <>
            <Grid item xs={12} sm={6}>
                <Input
                    required
                    name="firstName"
                    label="First name"
                    onChange={(id, e) => { setForm({ ...form, firstName: e.target.value }) }}
                    style={{ background: 'transparent ' }}
                    placeholder="First name"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input
                    required
                    name="lastName"
                    label="Last name"
                    onChange={(id, e) => { setForm({ ...form, lastName: e.target.value }) }}
                    style={{ background: 'transparent ' }}
                    placeholder="Last name"
                />
            </Grid>
            <Grid item xs={12}>
                <Input
                    required
                    name="Email"
                    label="Email"
                    onChange={(id, e) => { setForm({ ...form, email: e.target.value }) }}
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