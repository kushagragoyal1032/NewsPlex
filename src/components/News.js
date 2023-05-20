import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
      Country: 'in',
      PageSize: 8,
      Category: 'technology'
  };

  static PropsTypes = {
      Country: PropTypes.string,
      PageSize: PropTypes.number,
      Category: PropTypes.string
  }

  capitalizeString = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeString(this.props.Category)} - NewsPlex`;
}

async updateNews(){
  this.props.setProgress(0);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.PageSize}`
  this.setState({loading: true});
  let data = await fetch(url);
  let parcedData = await data.json(data);
  this.setState({ 
      articles: parcedData.articles, 
      totalResult: parcedData.totalResults,
      loading: false});
  this.props.setProgress(100);
  
    
}
async componentDidMount() {
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=974262138017486cba6c2afc253cd00d&page=1&pageSize=${this.props.PageSize}`
  // this.setState({loading: true});
  // let data = await fetch(url);
  // let parcedData = await data.json(data);
  //   this.setState({ 
  //       articles: parcedData.articles, 
  //       totalResult: parcedData.totalResults,
  //       loading: false});

  this.updateNews();
  }

  handlePrev = async () => {
    console.log("prev");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=974262138017486cba6c2afc253cd00d&page=${this.state.page - 1}&pageSize=${this.props.PageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parcedData = await data.json(data);
    // this.setState({ 
    //     articles: parcedData.articles,
    //     page: this.state.page - 1,
    //     loading: false});

    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  handleNext = async () => {
    console.log("next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.PageSize))) {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=974262138017486cba6c2afc253cd00d&page=${this.state.page + 1}&pageSize=${this.props.PageSize}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parcedData = await data.json(data);
    //     this.setState({ 
    //         articles: parcedData.articles,
    //         page: this.state.page + 1,
    //         loading: false});
    //     }

    this.setState({page: this.state.page + 1});
    this.updateNews();
  }

  fetchMoreData = async ()=> {
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.PageSize}`
    let data = await fetch(url);
    let parcedData = await data.json(data);
    this.setState({ 
        articles: this.state.articles.concat(parcedData.articles), 
        totalResult: parcedData.totalResults});
  }
 
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">NewsPlex - Top Headlines <b className="text-danger"><i>{this.capitalizeString(this.props.Category)}</i></b></h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner/>}
        >
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url} >
                <NewsItem title={element? element.title:""} desc={element? element.description:""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
              </div>
            );
          })}
        </div>
        </InfiniteScroll>
      </div>
      
    );
  }
}

export default News;

// API -  974262138017486cba6c2afc253cd00d
