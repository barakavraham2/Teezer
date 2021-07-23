import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function ContactForm() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="Email"
                        name="Email"
                        label="Email"
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="Message"
                        name="Message"
                        label="Message"
                        size='20px'
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}