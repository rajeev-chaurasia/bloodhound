import React from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import Level4 from "./components/Level4";
import Level5 from "./components/Level5";
import Level6 from "./components/Level6";
import Level7 from "./components/Level7";
import ThankYou from "./components/ThankYou";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/bloodhoundthankyou" component={ThankYou}></Route>
          <Route exact path="/theendstage" component={Level7}></Route>
          <Route exact path="/narutolrarsasuke.html" component={Level6}></Route>
          <Route exact path="/loadingfive" component={Level5}></Route>
          <Route exact path="/liewtcanswtrtbolprssf" component={Level4}></Route>
          <Route exact path="/welcomelevel3" component={Level3}></Route>
          <Route exact path="/level2bloodhound" component={Level2}></Route>
          <Route exact path="/cognitialevel1" component={Level1}></Route>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
