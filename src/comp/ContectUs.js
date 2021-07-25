import React, { memo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ContactUsForm from './ContactUsForm';
import ContactSucsses from './ContactSucsses';
import { Container, Form } from 'rsuite';

function ContectUs() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });


    return (
        <>

            <Container className="contactUsContainer" style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
                <h1 style={{ fontFamily: 'Montserrat' }}>
                    Contact Us
                </h1>
                <Form style={{ textAlign: 'center' }} >
                    {success ? <ContactSucsses /> : <ContactUsForm />}
                </Form>
            </Container>
        </>
    );
}

export default ContectUs;