import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Thumbnails from "./components/Thumbnails/Thumbnails";
import Header from "./components/Header/Header";
import PhotoView from "./components/PhotoView/PhotoView";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Thumbnails} />
        <Route path="/photo/:photoId" component={PhotoView} />
      </Switch>
    </div>
  );
}

export default App;
