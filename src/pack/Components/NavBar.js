import React, {Component} from 'react'
import styled from 'styled-components'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faPaypal} from "@fortawesome/free-brands-svg-icons"
import imgLogo from '../assets/img/logo.svg'

const LogoAndText = styled.div`
  display: flex;
  .logo {
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
  }
  
`

const SNavLink = styled.a`
  color: white;
  font-weight: bold;
  &:hover {
    color: white;   
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
                    <span className="text-white small mr-3">Do you enjoy WhatsAllApp? Please <SNavLink target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PHVYMCEVZNLPA">donate</SNavLink>, everything is welcome! 🙂</span>
                    <span><a target="_blank" className="text-white" href="https://github.com/LoranKloeze/WhatsAllApp"><FontAwesomeIcon icon={faGithub}/></a> </span>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar