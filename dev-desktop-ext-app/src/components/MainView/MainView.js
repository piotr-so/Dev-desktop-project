import React, { Component } from 'react';
import DevUiOverview from "../DevUiOverview/DevUiOverview";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./_bodyStyles.scss";

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemToRender: 2
        }
    }

    render() {
        const { itemToRender } = this.state;
        if (itemToRender === 1) {
            return (
                <div className="main-underlay">
                    <div className="main-section"></div>
                    <div className="greeting-anchor">

                        <div className="greeting-span-icon-anchor">
                            <FontAwesomeIcon icon="circle-notch" className="test-icon" />
                            <span className="main-greeting">Welcome back</span>
                        </div>
                    </div>
                    <span className="forwarding-span">Let's begin</span>
                </div>
            )
        }
        else if (itemToRender === 2) {
            return (
                <DevUiOverview />
            )
        }
    }
}


export default MainView;
