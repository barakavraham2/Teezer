import React, { memo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ContactUsForm from './ContactUsForm';
import ContactSucsses from './ContactSucsses';
import { Container, Content, Form, Panel, FlexboxGrid } from 'rsuite';
import ico from '../img/favicon.png'
function ContectUs() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
        <>

            <Content style={{ color: 'black', marginBottom: '10px' }}>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item>
                        <Panel style={{ fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                            Contact Us
                        </Panel>
                        <Form style={{ textAlign: 'left', width: '100%', fontWeight: 'bold' }} >
                            {success ? <ContactSucsses /> : <ContactUsForm />}
                        </Form>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </>
    );
}

export default ContectUs;