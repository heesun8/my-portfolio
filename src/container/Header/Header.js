import { intro1 } from "../../constants";
import { React } from 'react';

import './Header.css';

const Header = () => {

    return (
        <div id="home">
            <video
                src={intro1}
                type="video/mp4"
                playsInline
                autoPlay
                muted
                loop
                id="bgvid">
            </video>
            <header className="app__header">
                <h1>Hello, I'm Heesun
                    <span>A frontend web developer.</span>
                </h1>
            </header>
        </div>
    );
}

export default Header;