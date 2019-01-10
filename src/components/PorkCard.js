import React, { Component } from "react";
import PorkDetails from "./PorkDetails";

class PorkCard extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }

  showDetails = e => {
    console.log("clicked")
    this.state.isVisible === false ? 
    this.setState({ isVisible: true }) :
    this.setState({ isVisible: false })
  };

  render() {

    return (
      <div onClick={e => this.showDetails(e)} className="ui eight wide column">
        <h3>{this.props.hog.name}</h3>
        <img src={this.props.hog.image} />
        {this.state.isVisible ? (
          <PorkDetails
            specialty={this.props.hog.specialty}
            greased={this.props.hog.greased}
            weight={this.props.hog.weight}
            medal={this.props.hog.medal}
          />
        ) : null}
      </div>
    );
  }
}

export default PorkCard;

/*  
      
      <div className="pork-details" hidden="true">
        <p>{props.hog.specialty}</p>
        <p>{props.hog.weight}</p>
        <p>{props.hog.medal}</p>
      </div> */
