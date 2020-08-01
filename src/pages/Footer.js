import React, { Component } from 'react'
import styled from 'styled-components';
import {FaGithub, FaFacebook, FaLinkedinIn} from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <Router>
            <FooterStyle>
                <div className="container">
                <div className="footer bg-light">
                
                <p className="bg-light"><i className="bg-light">Designed and built</i> by <strong className="bg-light">Abdullah Odeh</strong></p>
                <p>&copy; 2020</p>
            </div>
            </div>
            </FooterStyle>
            </Router>
        )
    }
}

export const FooterStyle = styled.footer` {
    .container {
        width: 100%;
        height: 10vh;
    }


    .footer {
        height: 10vh;
        width: 50%;
        padding: 1rem;
        margin: auto;
        text-align: center;
    }

    .container .icons a {
        margin: auto;
        opacity: 0.5;
        background-color: var(--lightGray);
        &:hover {
            opacity: 1;
        }
    }

    .footer p {
        text-align: center;
        justify-content: center;
        padding: 1rem;
        color: var(--lightGray);
        
    }

    
}
`

export const IconLinks = styled.div` {

}
`

{/* <h5 className="bg-light">Portfolio tech stack</h5>
                <ul className="bg-light">
                    <li className="bg-light">HTML5</li>
                    <li className="bg-light">CSS</li>
                    <li className="bg-light">JavaScript</li>
                    <li className="bg-light">React</li>
                    <li className="bg-light">Node.js</li>
                    <li className="bg-light">Bootstrap</li>
                </ul> */}

                // .footer ul {
                //     display: grid;
                //     grid-template-columns: repeat(3, 1fr);
                //     justify-content: space-between;
                //     letter-spacing: 0.1rem;
                //     width: 10%;
                //     list-style: none;
                // }
            
                // .footer ul li {
                //     display: grid;
                //     padding: 0.5rem;
                //     text-align: left;
                //     justify-content: center;
                //     grid-template-columns: repeat (2, 1fr);
                // }