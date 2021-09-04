import React from "react";

const NewsItem = (props) => {
  const { Title, Description, ImgUrl, NewsUrl, Author, date, Source } = props;

  return (
    <div>
      <div className="card mb-3">
        <img
          src={
            !ImgUrl
              ? "https://chartio.com/assets/new-design/a2e4d2b1f963c16a21fe1b61d73f0ba10a94ad60b9157425c225dd595b23ba92/blank.png"
              : ImgUrl
          }
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{Description}</p>
          <div className="d-flex flex-column border-bottom pb-2">
            <a
              href={NewsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Read More
            </a>
            <div className="btn mt-2 btn-danger fs-6"> By {Source}</div>
          </div>
          <div className="card-footer mt-3">
            By {!Author ? "Unknown" : Author} On {new Date(date).toGMTString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
