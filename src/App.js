import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  let ApiKey = process.env.REACT_APP_NEWS_API;
  let PageSize = 6;

  const [Progress, setProgress] = useState(0);

  const ProgressFunction = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={Progress} height={3} />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              ProgressFunction={ProgressFunction}
              ApiKey={ApiKey}
              key="general"
              PageSize={PageSize}
              Country="in"
              Category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              ProgressFunction={ProgressFunction}
              ApiKey={ApiKey}
              key="business"
              PageSize={PageSize}
              Country="in"
              Category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              ProgressFunction={ProgressFunction}
              ApiKey={ApiKey}
              key="entertainment"
              PageSize={PageSize}
              Country="in"
              Category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              ProgressFunction={ProgressFunction}
              ApiKey={ApiKey}
              key="general"
              PageSize={PageSize}
              Country="in"
              Category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              ProgressFunction={ProgressFunction}
              ApiKey={ApiKey}
              key="health"
              PageSize={PageSize}
              Country="in"
              Category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              ProgressFunction={ProgressFunction}
              ApiKey={ApiKey}
              key="science"
              PageSize={PageSize}
              Country="in"
              Category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              ProgressFunction={ProgressFunction}
              ApiKey={ApiKey}
              key="sports"
              PageSize={PageSize}
              Country="in"
              Category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              ProgressFunction={ProgressFunction}
              ApiKey={ApiKey}
              key="technology"
              PageSize={PageSize}
              Country="in"
              Category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
