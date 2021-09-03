import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";

class App extends React.Component {

  ApiKey = process.env.REACT_APP_NEWS_API;
  PageSize = 6;

  state = {
    progress: 0,
  };

  SetProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                SetProgress={this.SetProgress} ApiKey={this.ApiKey}
                key="general"
                PageSize={this.PageSize}
                Country="in"
                Category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                SetProgress={this.SetProgress} ApiKey={this.ApiKey}
                key="business"
                PageSize={this.PageSize}
                Country="in"
                Category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                SetProgress={this.SetProgress} ApiKey={this.ApiKey}
                key="entertainment"
                PageSize={this.PageSize}
                Country="in"
                Category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                SetProgress={this.SetProgress} ApiKey={this.ApiKey}
                key="general"
                PageSize={this.PageSize}
                Country="in"
                Category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                SetProgress={this.SetProgress} ApiKey={this.ApiKey}
                key="health"
                PageSize={this.PageSize}
                Country="in"
                Category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                SetProgress={this.SetProgress} ApiKey={this.ApiKey}
                key="science"
                PageSize={this.PageSize}
                Country="in"
                Category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                SetProgress={this.SetProgress} ApiKey={this.ApiKey}
                key="sports"
                PageSize={this.PageSize}
                Country="in"
                Category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                SetProgress={this.SetProgress} ApiKey={this.ApiKey}
                key="technology"
                PageSize={this.PageSize}
                Country="in"
                Category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
