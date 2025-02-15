import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
//import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../image/profile.jpg';
import './NavMenu.css';
import { ImLinkedin, ImGithub, ImProfile, ImHome } from 'react-icons/im';
import { IoIosAlbums } from 'react-icons/io';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                            <img src={profile} className="App-logo" alt="logo" />
                            <i> CHRYSICS </i>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">
                                        <ImHome /> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/about">
                                        <ImProfile/> Blog</NavLink>
                                </NavItem>
                                {/*<Dropdown as={NavItem} className="dropdown">
                                    <Dropdown.Toggle className="text-dark nav-link dropdown-button">Projects</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={NavLink} tag={Link} className="text-dark nav-link" to="/projects/active">Active</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} tag={Link} className="text-dark nav-link" to="/projects/archive">Archive</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                */}
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/projects/archive">
                                        <IoIosAlbums/> Projects</NavLink>
                                </NavItem>
                                {/*<NavItem>*/}
                                {/*    <NavLink tag={Link} className="text-dark" to="/tutorials">Tutorials</NavLink>*/}
                                {/*</NavItem>*/}
                                <NavItem>
                                    <a className="text-dark nav-link" href="https://www.linkedin.com/in/chrysics91">
                                        <ImLinkedin /> LinkedIn</a>
                                </NavItem>
                                <NavItem>
                                    <a rel="me" href="https://mastodon.social/@chrysics">Mastodon</a>
                                </NavItem>
                                <NavItem>
                                    <a className="text-dark nav-link" href="https://github.com/CHRYSICS/">
                                        <ImGithub /> GitHub</a>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
