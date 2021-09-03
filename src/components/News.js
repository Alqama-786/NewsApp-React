import React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import NewsItem from "./NewsItem";

class News extends React.Component {
  static defaultProps = {
    PageSize: 8,
    Country: "in",
    Category: "general",
  };

  static propTypes = {
    PageSize: PropTypes.number,
    Country: PropTypes.string,
    Category: PropTypes.string,
  };

  Capitalize = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("This is Constructer");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.Capitalize(
      this.props.Category
    )} - News Application`;
  }

  async UpdateNews() {
    this.props.SetProgress(13);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    let data = await fetch(url);
    this.props.SetProgress(30);
    let JsonData = await data.json();
    console.log(JsonData);
    this.props.SetProgress(70);
    this.setState({
      articles: JsonData.articles,
      totalResults: JsonData.totalResults,
      loading: false,
    });
    this.props.SetProgress(100);
  }

  async componentDidMount() {
    this.UpdateNews();
  }

  FetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    let data = await fetch(url);
    const JsonData = await data.json();
    this.setState({
      articles: this.state.articles.concat(JsonData.articles),
      totalResults: JsonData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-dark fs-1 mb-5 text-center mt-5">
          News App - Top {this.Capitalize(this.props.Category)} Headlines
        </h1>
        {this.state.loading && <Loader />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.FetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader />}
        >
          <div className="container">
            <div className="row pb-3 border-bottom mb-3">
              {this.state.articles.map((element) => {
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
  }
}

export default News;
