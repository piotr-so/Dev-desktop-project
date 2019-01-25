import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import "./_bodyStyles.scss";

class MainView extends Component {
    render() {
        return (
            <div className="main-underlay">
                <div className="main-section"></div>
                <div className="content-wrapper">
                    <div className="greeting-anchor">
                        <div className="greeting-span-icon-anchor">
                            <FontAwesomeIcon icon="circle-notch" className="test-icon" />
                            <span className="main-greeting">There is no spoon</span>
                        </div>
                    </div>
                    <span className="forwarding-span"><Link to="/devUiOverview">Let's begin</Link></span>
                </div>
            </div>
        )
    }
}


export default MainView;
