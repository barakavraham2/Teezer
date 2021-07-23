import React from 'react';
import { Content } from 'rsuite';
import Fade from 'react-reveal/Fade';
function Home() {
    return (
        <Content>
            <div className="headLine">
                <Fade left>
                    <div className="teezer">
                        T e e z e r
                    </div>
                </Fade>
                <Fade right>
                    <div className="comingsoon">
                        <p>Coming Soon...</p>
                    </div>
                </Fade>
            </div>
        </Content>
    );
}

export default Home;