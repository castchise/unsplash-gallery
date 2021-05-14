import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { clearLocalStorage } from "./utils/index";

import ImageContainer from "./components/ImageContainer/image-container.component";
import ImageDetails from "./pages/image-details.component";
import Header from "./components/Header/header.component";

import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sourceType: "unsplash"
    };
  }

  changeSourceType = (current) => {
    this.setState({ sourceType: current });
  };

  clearLocalItems = (category) => {
    clearLocalStorage(category);
    this.setState({ sourceType: "unsplash" });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header
            sourceType={this.state.sourceType}
            changeSourceType={this.changeSourceType}
            clearLocalItems={this.clearLocalItems}
          />
          <main className="max-w-1200 mx-auto">
            <Switch>
              <Route exact path="/">
                <ImageContainer sourceType={this.state.sourceType} />
              </Route>
              <Route path="/image/:slug" component={ImageDetails} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}
