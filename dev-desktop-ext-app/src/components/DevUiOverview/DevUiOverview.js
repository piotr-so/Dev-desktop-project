import React, { Component } from 'react';
import Clock from "../Clock/Clock";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./_UiOverviewStyles.scss";

class DevUiOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokeArray: [],
            canRender: false
        }
    }

    componentDidMount() {

        fetch('https://official-joke-api.appspot.com/jokes/ten').then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    console.log(response);
                }
            }
        ).then(data => {
            this.setState({
                jokeArray: data,
                canRender: true
            })
            // console.log(data)
        })
    }

    render() {
        const { jokeArray, canRender } = this.state;

        if (canRender) {
            let itemToRender = Math.floor(Math.random() * (10 - 1) + 1);
            // console.log(itemToRender)
            return (
                <div className="ui-background">
                    <div className="ui-top-section">
                        <div>Hello, developer!</div>
                        <Clock />
                    </div>
                    <div className="dev-jokes">
                        <div>
                            <img src={require("../DevUiOverview/img/like_sir.png")} alt="like_sir" />
                            <div>
                                <div>JOKE OF THE DAY:</div>
                                <div>{"- " + jokeArray[itemToRender].setup}</div>
                                <div>{jokeArray[itemToRender].punchline}</div>
                            </div>
                        </div>
                        <div>Widget pogodowy (work in progress)</div>
                    </div>
                    <div className="navigation-bar"><Navbar /></div>
                </div>
            )
        }
        else {
            return (
                <div className="ui-background">
                    <h1 className="loading-placeholder">Loading <FontAwesomeIcon icon="spinner"/></h1>
                    
                </div>

            )
        }

    }
}

export default DevUiOverview;