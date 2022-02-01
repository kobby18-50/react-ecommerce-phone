import { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../logo2.svg';
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class NavBar extends Component {
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               
                <Link to='/'>
                    <img src={logo} alt="phone logo" className="navbar-brand" height={70} width={70}/>
                </Link>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Product</Link>
                    </li>
                </ul>
                
                <Link to='/cart' className="ml-auto" >
                   <ButtonContainer>
                       <span className="mr-2">
                    <i className="fas fa-cart-plus"/>my cart
                       </span>
                   </ButtonContainer>
                   
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = styled.nav`
    background : var(--mainBlue) !important;
    .nav-link{
        color : var(--mainWhite) !important;
        font-size : 1.3rem;
    }
`



export default NavBar;