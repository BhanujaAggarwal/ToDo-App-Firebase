import React from 'react';
import PinkHeart from "../assets/PinkHeart.png"

function About() {
    return (
        <React.Fragment>
            <div style={AboutStyle}>
                <h1>About</h1>
                <p style={{color: "#000"}}>This is a TodoList app</p>
                <img src={PinkHeart} alt="PinkHeart" style={{ width: "200px", marginTop: "30px" }} />
            </div>
        </React.Fragment>
    )
}
const AboutStyle = {
    background: '#FFF',
    color: 'rgb(255, 192, 203)',
    textAlign: 'center',
    padding: '30px',
    font: "Georgia"
}


export default About;
