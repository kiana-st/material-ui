import React from 'react';
import Nav from './navigation/Nav';

function Header() {
    return (
        <div className="container">
            <Nav />
            <video src="/public/videos/video-2.mp4"/>
            <h1>ADVENTURE AWAITING</h1>
            <p>WHAT ARE OU WAITING FOR?</p>
            <div>
                <button>GET STARTED</button>
                <button>WATCH TRAILER</button>
            </div>
        </div>
    )
}

export default Header
