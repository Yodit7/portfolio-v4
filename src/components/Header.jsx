import { styled } from "styled-components";
import { useState } from "react";
import '../css/Header.css';


const HeaderContainer = styled.div`
    .header-container {
        position: fixed;
        z-index: 99999;
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        font-size: 20px;
        background-color: rgb(13, 17, 23);        
    }

    @media (min-width: 1025px) and (max-width: 1200px) {
        .header-container {
            max-width: 1025px;
            width: 100%;
        }
    }
`;

const Icon = styled.div`
    a {
        text-decoration: none;
        color: rgb(162, 172, 189);
        font-family: 'SF Pro', sans-serif;
        font-weight: 900;
        font-size: 22px;
        padding-left: 40px;
    }
`;

const Nav = styled.ul`
    list-style: none;
    display: flex;
    font-size: 18px;
    font-weight: 100;
`;

const NavItem = styled.li`
    a {
        color: white;
        padding: 0px 20px;
        cursor: pointer;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
    }
`;

const Header = () => {
    
    return (
        <>
            <HeaderContainer>
                <div className="header-container">
                    <Icon>
                        <a href="">Y.</a>
                    </Icon>
                    <Nav>
                        <NavItem><a href="#about">About</a></NavItem>
                        <NavItem><a href="#projects">Projects</a></NavItem>
                        <NavItem><a href="#contact">Contact</a></NavItem>
                    </Nav>
                </div>
            </HeaderContainer>
        </>
    )
}

export default Header;

