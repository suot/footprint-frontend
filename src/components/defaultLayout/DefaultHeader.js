import React, { Component } from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import logo from '../../assets/img/footprint.png'
import miniLogo from '../../assets/img/footprint_mini.png'
import {Link} from "react-router-dom";


class DefaultHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />

        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Footprint Logo' }}
          minimized={{ src: miniLogo, width: 30, height: 30, alt: 'Footprint Mini Logo' }}
        />

        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>

          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>

          <AppHeaderDropdown direction="down" className="mr-4">
            <DropdownToggle nav>
              <img src={'/assets/avatars/Suo Tian.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
              <span>user name</span>
            </DropdownToggle>
              
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Profile</strong></DropdownItem>

              <DropdownItem>
                  <NavLink href="/profile">
                      <i className="fa fa-bell-o"></i> Edit Profile
                  </NavLink>
              </DropdownItem>

              <DropdownItem><i className="fa fa-envelope-o"></i> Change Password</DropdownItem>

              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>

              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = {};
DefaultHeader.defaultProps = {};

export default DefaultHeader;
