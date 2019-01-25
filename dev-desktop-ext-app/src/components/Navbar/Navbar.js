import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import "./_Navbar.scss";

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/devUiOverview">
                    <FontAwesomeIcon icon="home" className={this.props.activeState === 1 ? "nav-active" : "nav-not-Active"}/>
                </Link>
                <Link to="/WorldNews">
                    <FontAwesomeIcon icon="globe-americas" className={this.props.activeState === 2 ? "nav-active" : "nav-not-Active"} />
                </Link>
                <Link to="/DevJobs" >
                    <FontAwesomeIcon icon="code" className={this.props.activeState === 3 ? "nav-active" : "nav-not-Active"} />
                </Link>
            </Fragment>
        );
    }
}

export default Navbar;