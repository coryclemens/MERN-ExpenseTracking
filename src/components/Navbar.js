import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar {
            display:felx;
            flex-direction: row;
          position: fixed;
        top: 0; 
        overflow: hidden;}
  a, .navbar-nav, .navbar-light .nav-link {
    font-size: 2em;
    color: #800000;
    padding: 8px;
    &:hover { color: white; }
    text-decoration: none;
  }
  span{
    color: white;
    font-size: 2em;
    &:hover { color: white; }
    padding: 20px;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar>
      <span>EX/PENSE</span>
      <Nav.Item><Nav.Link href="/">DASH</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/addorder">ADD</Nav.Link></Nav.Item>
    </Navbar>
    <br />
  </Styles>
)