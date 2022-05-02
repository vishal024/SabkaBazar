import React from "react";
import styled from 'styled-components';
import { AiOutlineCopyright } from "react-icons/ai"

const StyledContainer = styled.div`
width: 70%;
margin: auto;
display: flex;
`;
const StyledLoginDiv = styled.div`
padding: 50px 0px 0px 30px;
`;
const StyledText = styled.h3`
font-size: 22px;
font-family: system-ui;
font-weight: 700;
`;
const StyledSpan = styled.span`
font-size: 11px;
font-family: cursive;
`;
const StyledInputDiv = styled.div`
display: grid;
grid-gap: 35px;
margin: 37px 0px 0px 50px;
`;
const StyledInput = styled.input`
border-bottom: 1.7px solid #8080807a;
border-left-style: hidden;
border-right-style: hidden;
border-top-style: hidden;
width: 300px;
padding-bottom: 10px;
font-size: 12px;
font-family: system-ui;
font-weight: 500;

&:focus{
    outline:none;
    border-bottom: 1.7px solid #0cbbbb;
}
&:focus::placeholder {
    color: #0cbbbb;
    position: absolute;
    pointer-events: none;
    top: -3px;
    transition: 0.2s ease all;
  }
`;
const StyledLoginButton = styled.button`
background-color: #c50707f0;
padding: 7px;
color: white;
font-family: system-ui;
font-size: 11px;
border: none;
`;
const StyledFooter = styled.div`
background-color: #80808021;
padding: 12px 0px 12px 200px;
margin: 20px 0px 0px 20px;
font-size: 11px;
font-family: cursive;
width: 97%;

& svg{
    vertical-align: baseline;
    height: 10px;
}
`;
const SignIn = () => {
    return (
        <div>
            <StyledContainer>
                <StyledLoginDiv>
                    <StyledText>Login</StyledText>
                    <StyledSpan>Get access to your orders, wishlist and recommedations.</StyledSpan>
                </StyledLoginDiv>
                <StyledInputDiv>

                    <StyledInput type="email" placeholder="Email" name="email" required />

                    <StyledInput type="password" placeholder="Password" name="psw" required />

                    <StyledLoginButton>Login</StyledLoginButton>

                </StyledInputDiv>

            </StyledContainer>
            <StyledFooter>Copyright <AiOutlineCopyright /> 2011-2018 Sabka Bazar Grocery Supplies Pvt Ltd</StyledFooter>
        </div>
    )
}
export default SignIn;