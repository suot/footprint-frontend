import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/footprint.png'
import miniLogo from '../../assets/img/footprint_mini.png'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/travelActions'
import { Avatar } from '@material-ui/core';


class DefaultHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

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
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mr-4">
            <DropdownToggle nav>
                {
                    profile.avatar ? <Avatar src={profile.avatar} alt={ profile.firstName + " " + profile.lastName } /> : <Avatar>{ profile.initials }</Avatar>
                }
            </DropdownToggle>
            <DropdownMenu>
                {/*<DropdownItem header tag="div" className="text-center"><strong>Profile</strong></DropdownItem>*/}
                <DropdownItem><NavLink href="/profile"><i className="fa fa-bell-o"/> Edit Profile</NavLink></DropdownItem>
                {/*<DropdownItem><i className="fa fa-envelope-o"/> Change Password</DropdownItem>*/}
                {/*<DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>*/}
                <DropdownItem onClick={this.props.logout}><i className="fa fa-lock"/> Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);
