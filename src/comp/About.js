import React from 'react';
import { Content } from 'rsuite';
import ico from '../img/favicon.png'
import Fade from 'react-reveal/Fade';
import logo from '../img/logo.png'
function About() {
    return (
        <Content className="About">
            <div className="logo">
            </div>
            <Fade up>
                <div className="AboutHead">
                    <p>About Teezer</p>
                    <div className="aboutCon">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            </Fade>
        </Content>
    );
}

export default About;