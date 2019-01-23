import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./_Navbar.scss";

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <FontAwesomeIcon icon="home" />
                <FontAwesomeIcon icon="globe-americas" />
                <FontAwesomeIcon icon="code" />
            </Fragment>
        );
    }
}

export default Navbar;