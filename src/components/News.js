import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const capitalizeString = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async ()=> {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.PageSize}`
    setLoading(true);
    let data = await fetch(url);
    let parcedData = await data.json(data);
    setArticles(parcedData.articles);
    setTotalResults(parcedData.totalResults);
    setLoading(parcedData.loading);
    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `${capitalizeString(props.Category)} - NewsPlex`;
    updateNews();
    },[]);

  // const handlePrev = async () => {
  //   console.log("prev");
  //   setPage(page-1);
  //   updateNews();
  // }

  // const handleNext = async () => {
  //   console.log("next");
  //   setPage(page+1);
  //   updateNews();
  // }

  const fetchMoreData = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.PageSize}`
    setPage(page+1); // doubt on this
    let data = await fetch(url);
    let parcedData = await data.json(data);
    setArticles(articles.concat(parcedData.articles));
    setTotalResults(parcedData.totalResults);
  }
 
  return (
    <div className="container my-3">
      <h1 className="text-center" style={{margintop: "90px"}} >NewsPlex - Top Headlines <b className="text-danger"><i>{capitalizeString(props.Category)}</i></b></h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
      <div className="row">
        {articles.map((element) => {
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

News.defaultProps = {
  Country: 'in',
  PageSize: 8,
  Category: 'technology'
};

News.PropsTypes = {
  Country: PropTypes.string,
  PageSize: PropTypes.number,
  Category: PropTypes.string
}

export default News;


// API -  974262138017486cba6c2afc253cd00d
