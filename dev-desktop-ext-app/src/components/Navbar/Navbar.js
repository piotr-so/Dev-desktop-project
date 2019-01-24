import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import "./_Navbar.scss";

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/devUiOverview">
                    <FontAwesomeIcon icon="home" />
                </Link>
                <Link to="/WorldNews">
                    <FontAwesomeIcon icon="globe-americas" />
                </Link>
                <FontAwesomeIcon icon="code" />
            </Fragment>
        );
    }
}

export default Navbar;