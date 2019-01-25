import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../DevUiOverview/_UiOverviewStyles.scss";
import "./_DevJobs.scss";


class DevJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeState: 3,
            whatToSearch: "",
            searchResults: [],
            filteredOffers: [],
            canRender: false
        }
    }

    componentDidMount() {

        fetch('https://jobs.github.com/positions.json').then(
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
                searchResults: data,
                canRender: true
            })
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    searchItem = (event) => {
        event.preventDefault();
        if (this.state.whatToSearch.trim().length === 0) {
            this.setState({
                filteredOffers: []
            })
        }
        else {
            const filteredOffers = this.state.searchResults.filter(offerDescription => {
                return offerDescription.description.toLowerCase().trim().includes(this.state.whatToSearch.toLowerCase().trim())
            })
            console.log(filteredOffers + " empty?")
            console.log(filteredOffers.length)
            this.setState({
                filteredOffers: filteredOffers
            })
        }
    }


    render() {
        const { filteredOffers, canRender } = this.state;
        if (canRender) {
            return (
                <div className="ui-background background-fix">
                    <div className="ui-top-section">
                        <div>New job offers, right below!</div>
                    </div>
                    <div className="searchbar-container">
                        <div className="relative-container">
                            <form>
                                <input type="text" name="whatToSearch" autoComplete="off" value={this.state.whatToSearch} onChange={this.changeHandler} onKeyPress={event => {
                                    if (event.key === "Enter") {
                                        this.searchItem(event);
                                    }
                                }}
                                    className="search-input" placeholder="Type programming language and search" />
                                <button type="submit" onClick={this.searchItem}><FontAwesomeIcon icon="search" /></button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <ul className="jobs-list">
                            {filteredOffers.map((jobItem) => {
                                return (
                                    <a key={"a" + jobItem.id} href={jobItem.url}>
                                        <li key={jobItem.id} className="job-box">
                                            <img src={jobItem.company_logo} alt={jobItem.title} />
                                            <div>
                                                <p>{jobItem.title}</p>
                                                <p>{jobItem.company}</p>
                                                <p>{jobItem.location}</p>
                                            </div>
                                        </li>
                                    </a>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="navigation-bar"><Navbar activeState={this.state.activeState} /></div>
                </div >
            )
        }
        else {
            return (
                <div className="ui-background">
                    <h1 className="loading-placeholder">Loading <FontAwesomeIcon icon="spinner" /></h1>

                </div>
            )
        }
    }
}


export default DevJobs;