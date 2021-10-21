import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// import { BrowserRouter, Route, Link } from "react-router-dom";

export default class News extends Component {
    static defaultProps = {
        category: 'general'
    }
    static propTypes = {
        category: PropTypes.string,
    }


    constructor() {
        super();
        console.log("hello i am a construtor  ")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,

        }
    }
    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3418d4acb1eb46359010849f2b2948f8&page=${this.state.page+1}&pageSize=6`;
        this.props.setProgress(30);
        this.setState({ loading: true });
        this.props.setProgress(50);
        let data = await fetch(url);
        this.props.setProgress(70);
        let passeddata = await data.json()
        this.props.setProgress(90);
        this.setState({
            articles: passeddata.articles,
            totalResults: passeddata.totalResults,
            loading: false,
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updateNews();
    }
    // handlepreviousclick = async ()=>{
    //     console.log("previous")
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3418d4acb1eb46359010849f2b2948f8&page=${this.state.page-1}&pageSize=6`;
    //     let data = await fetch(url);
    //     let passeddata = await data.json()
    //     console.log(passeddata);
    //     this.setState({
    //         page : this.state.page-1,
    //         articles: passeddata.articles
    //     })
    // }
    // handlenextclick = async ()=>{
    //     console.log("next")
    //     if(this.state.page+1 > Math.ceil(this.state.totalResults/6)){

    //     }
    //     else{

    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3418d4acb1eb46359010849f2b2948f8&page=${this.state.page+1}&pageSize=6`;
    //         let data = await fetch(url);
    //         let passeddata = await data.json()
    //         console.log(passeddata);
    //         this.setState({
    //             articles: this.state.articles.concat{passeddata.articles},
    //             page : this.state.page+1,
    //             articles: passeddata.articles
    //         })
    //     }
    //     }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3418d4acb1eb46359010849f2b2948f8&page=${this.state.page+1}&pageSize=6`;
        let data = await fetch(url);
        let passeddata = await data.json()
        this.setState({
            articles: this.state.articles.concat(passeddata.articles),
            totalResults: passeddata.totalResults
        })
    };

    render() {
        return (
            <>
                <div className="container my-3">
                    <h2 className="text-center" style={{ marginTop: "90px" }}>News App - Top Headlines</h2>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={'Loading...'}
                    >
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>

                                    <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                        </div>
                        {/* <div className="container d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-3" onClick={this.handlepreviousclick}> &larr; Previous </button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)} type="button" className="btn btn-dark mx-3" onClick={this.handlenextclick}>Next &rarr; </button>
                        </div> */}
                    </InfiniteScroll>

                </div>
            </>
        )
    }
}
