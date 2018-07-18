import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'components';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'
let ScrollLink = Scroll.Link;

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: false
      };
      this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
      scroll.scrollToTop();
    }

    render() {
      return (
        <div className="header">
          <div className="header-wrapper">
            <nav className="navbar navbar-expand-sm h-100">

              <a className="navbar-brand mx-auto" onClick={this.scrollToTop} href="#">
                <img className="img-fluid" src="images/logo.png" alt=""/>
              </a>
            
            </nav>
          </div>
        </div>
      );
    }
}

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;
