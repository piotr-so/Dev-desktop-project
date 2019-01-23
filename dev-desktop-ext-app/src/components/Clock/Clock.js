import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./_ClockStyles.scss";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date()
        }
    }

    componentDidMount() {
        this.clockInterval = setInterval(() => {
            this.setState({
                currentDate: new Date()
            })
        }, 1000)
        console.log(this)
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval)
    }

    render() {
        let clockHours = this.state.currentDate.getHours();
        let clockMinutes = this.state.currentDate.getMinutes();
        let clockToDisplay = ("0" + clockHours).slice(-2) + ":" + ("0" + clockMinutes).slice(-2);
        let clockTime = this.state.currentDate.toLocaleDateString();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let clockDay = this.state.currentDate.getDay();
        return (
            <div className="clock-styles">
                <div>{clockToDisplay}</div>
                <div>{days[clockDay] + ", " + clockTime}</div>
            </div>
        );
    }
}

export default Clock;