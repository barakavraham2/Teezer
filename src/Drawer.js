import React, { useEffect } from 'react';
import { ButtonToolbar, Button, Drawer, Paragraph, Icon, Divider, Nav } from 'rsuite'
import { useState } from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import ContectUs from './comp/ContectUs';
import { Link } from 'react-router-dom';
import ico from './img/favicon.png'
function DrawerB() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    // Function to close drawer
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }

    // Function to toggle Drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(true);
    }

    const handleSubmit = () => {
        setIsDrawerOpen(false)
    }
    return (
        <div style={{
            display: 'block', paddingLeft: 5, direction: 'rtl'
        }}>
            <div>
                <Button onClick={toggleDrawer} style={{ backgroundColor: 'transparent' }}>
                    <Icon icon="bars"></Icon>
                </Button>
                <Drawer className="drawerDemo"
                    show={isDrawerOpen}
                    onHide={closeDrawer}
                    full={false}

                >
                    <Drawer.Header>
                        <Drawer.Title style={{ fontFamily: 'Montserrat' }}><img src={ico} style={{ width: '15px', height: '15px' }} className="mb-2"></img> Teezer</Drawer.Title>
                    </Drawer.Header>
                    <Divider />
                    <Drawer.Body>
                        <div className="navItem">
                            <Link to="/"><Button className="btnNav" onClick={handleSubmit}>Home</Button></Link>
                        </div>
                        <div className="navItem">
                            <Link to="/about"><Button className="btnNav" onClick={handleSubmit}>About</Button></Link>
                        </div>
                        <div className="navItem">
                            <Link to="/contact"><Button className="btnNav" onClick={handleSubmit}>Contact Us</Button></Link>
                        </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                    </Drawer.Footer>
                </Drawer>

            </div>
        </div>
    );
}

export default DrawerB;