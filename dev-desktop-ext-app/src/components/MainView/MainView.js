import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./_bodyStyles.scss";

const MainView = () => (
    <Fragment>
        <div className="main-section"></div>
        <div>
            <FontAwesomeIcon icon="circle-notch" className="test-icon" />
            <span className="main-greeting">Welcome back developer</span>
        </div>
    </Fragment>

)

export default MainView;
