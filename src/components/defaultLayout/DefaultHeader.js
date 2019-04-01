import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/footprint.png'
import miniLogo from '../../assets/img/footprint_mini.png'
import { connect } from 'react-redux'
import firebase from 'firebase/app';
import { signOut } from '../../store/actions/authActions'
import { Avatar } from '@material-ui/core';


class DefaultHeader extends Component {
  render() {
    const { profile } = this.props;
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
            <NavLink href="/notifications"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>

          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>

          <AppHeaderDropdown direction="down" className="mr-4">
            <DropdownToggle nav>
                {
                    profile.avatar ? <Avatar src={profile.avatar} alt={ profile.firstName + " " + profile.lastName } />
                    : <Avatar>{ profile.initials }</Avatar>
                }
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
              <DropdownItem onClick={this.props.logout} ><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(signOut())

        // logOut: () =>  {
        //     firebase.auth().signOut().then(() => {
        //         dispatch({ type: 'LOGOUT_SUCCESS' })
        //     }).catch((err) => {
        //         dispatch({ type: 'LOGOUT_ERROR', err })
        //     });
        // }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);
