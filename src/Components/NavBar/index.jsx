import React from "react"
import {Link} from "react-router-dom"
import BazarLogo from "./logo.png"
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const NavContainer = styled.div`
display: flex;
align-items: end;
justify-content: space-around;
padding: 5px 140px 0px 102px;
height: 92px;
box-shadow: 0px 11px 10px -15px #111;

& a{
    text-decoration: none;
    font-family: sans-serif;
    font-size: 12px;
    margin:0px 0px 10px 0px;
}
& a svg{
    color: #8b0000d1;
    height: 20px;
    width: 30px;
}
`;

const Navbar = () =>{

    return(
        <NavContainer>
              <img style={{marginBottom:5, height:75}} src={BazarLogo} alt="logo" />
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/signin">SignIn</Link>
              <Link to="/register">Register</Link>
              <Link to="/cart"><FaShoppingCart/></Link>
        </NavContainer>
    )
}

export default Navbar;