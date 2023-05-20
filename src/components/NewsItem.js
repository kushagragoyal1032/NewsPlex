import React from "react";

const NewsItem = (props)=> {
  let {title, desc, imgurl, newsurl, author, date} = props;
  return (
    <div>
      <div className="card">
        <img src={imgurl?imgurl:"https://techcrunch.com/wp-content/uploads/2023/04/ast-spacemobile-satellite.jpg?resize=1200,786"} className="card-img-top" alt="..." />
        <div className="card-body" style={{backgroundColor: "rgb(0 123 255 / 33%)"}}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text"><small className="text-muted"><b>By:</b> {author?author:"Unknown"} <b>On</b> {date?new Date(date).toGMTString():"Unknown"}</small></p>
          <a href={newsurl} target="_blanck" className="btn btn-info">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
