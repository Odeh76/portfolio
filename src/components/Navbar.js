// import React, { Component } from 'react';
// import styled from 'styled-components';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import {FadeAnimationNav} from '../pages/Projects';
// export default class Navbar extends Component {
//     render() {
//         return (
//             <NavStyle data-aos="fade-down">
//                 <Router>
//             <nav className="nav-bar">
//                 <ul>
//                     <li><AnchorLink href='#home'>Home</AnchorLink></li>
//                     <li><AnchorLink href='#about'>About</AnchorLink></li>
//                     <li><AnchorLink href='#projects'>Projects</AnchorLink></li>
//                     <li><AnchorLink href='#resume'>Resume</AnchorLink></li>
//                 </ul>
//             </nav>
//             </Router>
//             </NavStyle>
//         )
//     }
// }

// export const NavStyle = styled.nav`
    
//     .nav-bar {
//     position: relative;
//     text-align: center;
//     text-transform: uppercase;
//     width: 100%;
//     height: 20vh;
//     padding: 1rem;
//     align-items: center;
//     color: var(--lightGray);
//     background: var(--whiteMain);
//     }

//     ul {
//         display: flex;
//         justify-content: center;
//         padding: 1rem;
//         color: var(--lightGray) !important;
//         align-items: center;
//         text-align: center;
//         list-style: none;
//     }

//     ul li {
//         padding-right: 30px;
//         padding-left: 30px;
//         color: var(--lightGray);
//     }

//     nav ul li:hover {
//         transition: smooth ease-in-out 0.2s;
//         font-weight: 500;
//         cursor: pointer;
//         color: var(--lightGray);
//         border: none;
//     }
// `


import React from 'react'
import resized from '../img/resized.png';

export default function Navbar() {
    return (
        <div data-aos="fade-down" className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-uppercase">
                <a href="#" className="navbar-brand"><img src={resized}></img></a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                    <li className="nav-item"><a href="#resume" className="nav-link">Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}


