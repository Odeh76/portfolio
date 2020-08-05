import React, { Component } from 'react'
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import About from '../pages/About.js'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function Navbar() {
    return (
            <NavComponent>
            <nav className="nav">
                <ul className="nav-list">
                    <Router>
                    
                    <Link className="link-style" data-aos="fade-down" data-aos-duration="500" to="home">Home</Link>
                    <Link className="link-style" data-aos="fade-down" data-aos-duration="700" to="about">About</Link>
                    <Link className="link-style" data-aos="fade-down" data-aos-duration="900" to="projects">Projects</Link>
                    <Link className="link-style" data-aos="fade-down" data-aos-duration="1100" to="resume">Resume</Link>
                    </Router>
                </ul>
            </nav>
            </NavComponent>
    )
}

export const NavComponent = styled.nav`
    * {
        z-index: 2;
    }

    .nav {
        display: flex;
        width: 100%;
        margin: auto;
    }

    .nav-list {
        display: flex;
        list-style: none;
    }

    .link-style {
        display: flex;
        padding: 1rem;
        width: 100%;
        color: var(--lightGray);
        text-decoration: none;
        
    }

    .link-style:hover {
        font-weight: 500;
    }

    

    // IPhone 6/7/8

    @media screen and (min-width: 375px) and (max-width: 767px) {
        .nav {
            position: fixed;
            justify-content: center;
           letter-spacing: 0.1rem;
    }       

        .nav-list {
            font-size: 18px;
        }

    }

    // IPad

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .nav {
           font-size: 2rem;
           justify-content: center;
           letter-spacing: 0.1rem;
        }
    }

    // IPad Pro

    @media screen and (min-width: 1024px) and (max-width: 1366px) {
        .nav {
            font-size: 2.5rem;
            letter-spacing: 0.1rem;
            justify-content: center;
        }
    
    }

    // Laptop

    @media screen and (min-width: 1200px) and (max-width: 1440px) {
        .nav {
            font-size: 1.2rem;
            display: flex;
            justify-content: flex-end
        }


    }
    

    // Small Phones 

@media screen and (min-width: 320px) and (max-width: 640px) {
    .nav {
        font-size: 15px;
        position: fixed;
    }
}

 


`

// Media queries
/*
    @media screen and (max-width: 500px) {
    background-color: black;
  }

  @media screen and (max-width: 768px) {
    background-color: red;

    @media screen and (min-width: 769px) and (max-width: 1170px) {
    background-color: yellow;
  }

  @media screen and (min-width: 1171px) {
    background-color: orange;
  }
  }

*/

// @media screen and (min-width: 450px) and (max-width: 767px) {
//     * {
//         position: relative;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//         right: 23%;
//     }
//   }
// @media screen and (min-width: 450px) and (max-width: 767px) {
//     * {
//         position: relative;
//         display: flex
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//     }
//   }



//     @media screen and (min-width: 769px) and (max-width: 1170px) {
//     * {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//     }
//   }



//   @media screen and (min-width: 1171px) {
//       * {
//         display: flex;
//         position: relative;
//         left: 26%;
//         }
//   }


