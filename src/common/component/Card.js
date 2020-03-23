import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <p class="title">{this.props.name}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Card;