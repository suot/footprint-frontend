import React, { Component } from 'react';

class DefaultFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <span><a href="https://github.com/hongshuidang/footprint">Footprint</a> &copy; 2019 V4.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">V4</a></span>
      </React.Fragment>
    );
  }
}

export default DefaultFooter;
