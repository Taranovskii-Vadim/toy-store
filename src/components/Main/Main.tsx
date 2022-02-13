import * as React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "../../pages/StartPage/StartPage";
import MainPage from "../../pages/MainPage/MainPage";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/sections:sectionId" component={MainPage} />
      </Switch>
    </main>
  );
};

export default Main;
