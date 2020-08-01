import React, { Component } from 'react'
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import About from '../pages/About.js'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function Navbar() {
    return (
            <NavComponent>
            <div className="wrapper">
            <nav className="nav">
                <ul className="nav-list">
                    <Router>
                    
                    <Link className="link-style" to="home">Home</Link>
                    <Link className="link-style" to="about">About</Link>
                    <Link className="link-style" to="projects">Projects</Link>
                    <Link className="link-style" to="resume">Resume</Link>
                    </Router>
                </ul>
            </nav>
            </div>
            </NavComponent>
    )
}

export const NavComponent = styled.nav`
    * {
        z-index: 2;
    }

    .nav {
        display: flex;
        
    }

    .nav-list {
        display: flex;
        list-style: none;
        width: 30%;
        position: relative;
        left: 70%;
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

    @media screen and (max-width: 992px) {
        .nav-list {
            display: flex;
            position: relative;
            left: 21%
            background-color: white;
        }
    }

    @media screen and (min-width: 450px) and (max-width: 767px) {
        * {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            right: 23%;
        }
      }
    @media screen and (min-width: 450px) and (max-width: 767px) {
        * {
            position: relative;
            display: flex
            justify-content: center;
            align-items: center;
            text-align: center;
        }
      }
    
    
    
        @media screen and (min-width: 769px) and (max-width: 1170px) {
        * {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
      }
       
      }
    
      @media screen and (min-width: 1171px) {
          * {
            display: flex;
            position: relative;
            left: 26%;
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



