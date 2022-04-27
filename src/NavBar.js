import React from 'react';
import {LeftContainer, NavBarCont, NavbarInnerContainer, NavbarLinkContainer, NavbarLink} from './NavBarStyle';


function NavBar() {
    return(
        <NavBarCont>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/login">Login</NavbarLink>
                        <NavbarLink to="/profile">Profile</NavbarLink>
                    </NavbarLinkContainer>
                </LeftContainer>
            </NavbarInnerContainer>
        </NavBarCont>
    );
}

export default NavBar;