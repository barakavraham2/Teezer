import React from 'react';
import { Fade } from 'react-reveal'
import { Grid } from 'rsuite'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ContactSucsses() {
    return (
        <Fade up>
            <Grid xs={12} style={{ textAlign: 'center' }}>
                <CheckCircleOutlineIcon style={{ color: 'green', fontSize: '200px', textAlign: 'center' }} />
            </Grid>
        </Fade>
    );
}

export default ContactSucsses;