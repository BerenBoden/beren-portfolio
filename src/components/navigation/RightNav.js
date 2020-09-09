import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    list-style: none;
    li {
        margin: 0 10px;
        a {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            transition: 0.2s ease-in-out;
            &:hover {
                color: #e45e5e;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        z-index: 10;
        position: fixed;
        right: 0;
        height: 80vh;
        top: 60px;
        background-color: rgba(0,0,0, 0.95);
        backdrop-filter: blur(15px);
        flex-direction: column;
        align-items: center;
        width: 100%;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        flex-flow: column nowrap;
        right: 0;
        li {
            margin: auto;
        }
    }
`

const RightNav = ({open}) => {
    return (
        <Ul open={open}>
            <li>
                <a href="/"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
            </li>
            <li>
                <a href="/projects"><i className="fa fa-folder" aria-hidden="true"></i> Projects</a>
            </li>
            <li>
                <a href="/contact"><i className="fa fa-briefcase" aria-hidden="true"></i> Contact</a>
            </li>
        </Ul>
    )
}

export default RightNav
