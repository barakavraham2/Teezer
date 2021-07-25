import React from 'react';
import { Fade } from 'react-reveal'
import { Grid } from 'rsuite'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ContactSucsses() {
    return (
        <Fade up>
            <Grid item xs={12} className="align-items-xs-center">
                <CheckCircleOutlineIcon style={{ color: 'green', fontSize: '200px' }} />
            </Grid>
        </Fade>
    );
}

export default ContactSucsses;