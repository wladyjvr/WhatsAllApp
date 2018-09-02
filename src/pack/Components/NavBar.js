import React, {Component} from 'react'
import styled from 'styled-components'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import imgLogo from '../assets/img/logo.svg'

const LogoAndText = styled.div`
  display: flex;
  .logo {
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
  }
  
`

const NavBar = () => {
    return(
        <div>
            <Navbar color="dark" dark expand="sm">
                <NavbarBrand href="/">
                    <LogoAndText>
                    <span className="logo" dangerouslySetInnerHTML={{ __html: imgLogo }}/>
                    <span className="text">WhatsAllApp </span>
                    <span className="small">&nbsp;Community</span>
                    </LogoAndText>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <span><a target="_blank" className="text-white" href="https://github.com/LoranKloeze/WhatsAllApp"><FontAwesomeIcon icon={faGithub}/></a> </span>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar