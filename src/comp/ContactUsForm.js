import React, { useState } from 'react';
import { Form, ControlLabel, FormControl, FormGroup, Grid, Notification } from 'rsuite'
import { Input, Message } from 'rsuite'
import { Button } from 'rsuite'
import { CircularProgress } from '@material-ui/core';
import * as emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import { validateContactUs } from '../helpers/contact'

function ContactUsForm(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false);

    function open(funcName) {
        Notification['error']({
            title: 'Error',
            description: <p>{funcName}</p>
        });
    }
    const handleSubmit = () => {
        const form = { firstName, lastName, email, message };
        if (!loading) {
            setLoading(true)
        }
        const { error } = validateContactUs(form)
        if (error) {
            setLoading(false)
            open(error.toString())
            return;
        }
        init("user_oh6qaIVQB2ErFmggHqScp");
        emailjs.send('service_we1c55s', 'template_i89x2f3', form)
            .then(function (response) {
                setLoading(false)
                props.setSucsses(true)
            }, function (err) {

            });
    }
    return (
        <Grid xs={12}>
            <FormGroup>
                <ControlLabel>first name</ControlLabel>
                <Input className="minWidth"
                    onChange={(id, e) => { setFirstName(e.target.value) }}
                    style={{ borderColor: 'black' }}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>first name</ControlLabel>
                <Input className="minWidth"
                    onChange={(id, e) => { setLastName(e.target.value) }}
                    style={{ borderColor: 'black' }}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <Input className="minWidth"
                    onChange={(id, e) => { setEmail(e.target.value) }}
                    style={{ borderColor: 'black' }}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Message</ControlLabel>
                <Input className="minWidth"
                    componentClass="textarea"
                    rows='4'
                    onChange={(id, e) => { setMessage(e.target.value) }}
                    style={{ borderColor: 'black' }}
                />
            </FormGroup>
            <Button onClick={handleSubmit} style={{ marginTop: '10px' }}>
                Submit {loading && <CircularProgress />}
            </Button>

        </Grid>
    );
}

export default ContactUsForm;