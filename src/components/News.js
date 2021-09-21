import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import NewsItem from "./NewsItem";

const News = (props) => {
  const [Articles, setArticles] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Page, setPage] = useState(1);
  const [TotalResults, setTotalResults] = useState(0);

  const Capitalize = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  const UpdateNews = async () => {
    props.ProgressFunction(13);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.ApiKey}&page=${Page}&pageSize=${props.PageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.ProgressFunction(30);
    let JsonData = await data.json();
    props.ProgressFunction(70);
    setArticles(JsonData.articles);
    setTotalResults(JsonData.totalResults);
    setLoading(false);
    props.ProgressFunction(100);
  };

  useEffect(() => {
    document.title = `${Capitalize(props.Category)} - News Application`;
    UpdateNews();
    // eslint-disable-next-line
  }, []);

  const FetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.Country
    }&category=${props.Category}&apiKey=${props.ApiKey}&page=${
      Page + 1
    }&pageSize=${props.PageSize}`;
    setPage(Page + 1);
    let data = await fetch(url);
    const JsonData = await data.json();
    setArticles(Articles.concat(JsonData.articles));
    setTotalResults(JsonData.totalResults);
  };

  return (
    <>
      <h1
        className="text-dark fs-1 mb-5 text-center"
        style={{ marginTop: "90px" }}
      >
        News App - Top {Capitalize(props.Category)} Headlines
      </h1>
      {Loading && <Loader />}
      <InfiniteScroll
        dataLength={Articles.length}
        next={FetchMoreData}
        hasMore={Articles.length !== TotalResults}
        loader={<Loader />}
      >
        <div className="container">
          <div className="row pb-3 border-bottom mb-3">
            {Articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    Title={element.title}
                    Description={element.description}
                    ImgUrl={element.urlToImage}
                    NewsUrl={element.url}
                    Author={element.author}
                    date={element.publishedAt}
                    Source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  PageSize: 8,
  Country: "in",
  Category: "general",
};

News.propTypes = {
  PageSize: PropTypes.number,
  Country: PropTypes.string,
  Category: PropTypes.string,
};

export default News;
