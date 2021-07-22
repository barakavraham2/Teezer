import React, { useEffect } from 'react';
import { ButtonToolbar, Button, Drawer, Paragraph, Icon, Divider, Nav } from 'rsuite'
import { useState } from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
function DrawerB() {
    let width = window.innerWidth;
    const [ifMobile, setIfMobile] = useState()
    useEffect(() => {
        width > 500 ? width = false : width = true
    }, [])
    // Drawer state
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    // Function to close drawer
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }

    // Function to toggle Drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(true);
    }
    return (
        <div style={{
            display: 'block', width: 200, paddingLeft: 5
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
                        <Drawer.Title>Teezer</Drawer.Title>
                    </Drawer.Header>
                    <Divider />
                    <Drawer.Body>

                        <div className="navItem">
                            <Button className="btnNav">Contact Us</Button>
                        </div>
                        <div className="navItem">
                            <Button className="btnNav">Team</Button>
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