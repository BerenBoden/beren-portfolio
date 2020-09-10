import React from 'react';
import Logo from '../../img/logo.png';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    z-index: 100;
    top: 0;
    position: fixed;
    width: 100%;
    font-size: 1.2rem;
    height: 80px;
    background: rgba(0, 0, 0,0.2);
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 3px 2px 3px rgba(0,0,0,0.4);
    backdrop-filter: blur(5px);
    img {
        width: 220px;
        cursor: pointer;
    }
}

`

function Navigation() {
    return (
        <Nav>
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <Burger />
        </Nav>
    )
}

export default Navigation
