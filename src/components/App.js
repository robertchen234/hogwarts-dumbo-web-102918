import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PorkContainer from "./PorkContainer";

class App extends Component {
  state = {
    hogsList: hogs
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <PorkContainer hogsList={this.state.hogsList} />
       
        <div>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water</div>
      </div>
    );
  }
}

export default App;
