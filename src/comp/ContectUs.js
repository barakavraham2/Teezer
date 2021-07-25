import React, { memo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ContactUsForm from './ContactUsForm';
import ContactSucsses from './ContactSucsses';

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

            <div style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
                <h1 style={{ fontFamily: 'Montserrat' }}>
                    Contact Us
                </h1>
                <Grid style={{ textAlign: 'center' }} >
                    <ContactUsForm />
                </Grid>
            </div>
        </>
    );
}

export default ContectUs;