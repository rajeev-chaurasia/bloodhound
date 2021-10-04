import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import Level4 from "./components/Level4";
import ThankYou from "./components/ThankYou";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/bloodhoundthankyou" component={ThankYou}></Route>
          <Route exact path="/platform4enrich" component={Level4}></Route>
          <Route exact path="/welcomelevel3" component={Level3}></Route>
          <Route exact path="/level2bloodhound" component={Level2}></Route>
          <Route exact path="/cognitialevel1" component={Level1}></Route>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
