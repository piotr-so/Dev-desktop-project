import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./_WorldNews.scss";

class WorldNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsObj: '',
            canRender: false,
            focusedElem: null,
            hiddenElem: "hidden"
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?language=en&pageSize=10&apiKey=03352a0c52cc4c308851ac142e7a031d').then(
            response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                }
                else {
                    console.log(response)
                }
            }
        ).then(newsData => {
            this.setState({
                newsObj: newsData,
                canRender: true
            })
            console.log(newsData)
        })
    }

    handleNewsClick = sourceId => {
        console.log("to jest sourceID: "+sourceId)
        this.setState({
            focusedElem: sourceId,
            hiddenElem: "shown"
        })
    }

    isActive = elemId => {
        if(elemId === this.state.focusedElem) {
            return 'active'
        }
        else {
            return 'not-active'
        }
    }

    render() {
        const { canRender, newsObj } = this.state;

        if (canRender) {
            const newsObjectsMap = newsObj.articles.map(news => { return news })
            const elemIdToRender = newsObjectsMap[Number(this.state.focusedElem)]
            return (
                <div className="ui-background">
                    <div><h1>Latest news around the world</h1></div>
                    <div className="news-section">
                        <div className="news-list-container">
                            <ul className="news-list">
                                {newsObj.articles.map((news, index) => {
                                    return (
                                        <li key={index} className={this.isActive(index)} onClick={() => this.handleNewsClick(index)}>
                                            <p>{news.title}</p>
                                            {news.author === null ? null : <span> by {news.author}</span>}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={this.state.hiddenElem === "hidden" ? "news-preview hidden" : "news-preview shown"}>
                            <img src={elemIdToRender.urlToImage} alt={elemIdToRender.source.name} />
                            <div>
                                <h4>{"by " + elemIdToRender.source.name}</h4>
                                <h2>{elemIdToRender.title}</h2>
                                <p>{elemIdToRender.description}</p>
                                <a href={elemIdToRender.url}><button>Read more</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="navigation-bar"><Navbar /></div>
                </div>
            );
        }
        else {
            return <h1>Loading...</h1>
        }
    }
}

export default WorldNews;
