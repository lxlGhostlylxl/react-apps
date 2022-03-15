import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: (this.state.value += 1) });
  };

  handleDeincrement = () => {
    if (this.state.value > 0) this.setState({ count: (this.state.value -= 1) });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>Theres no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  render() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "bg-warning" : "bg-primary";
    return (
      <div>
        <span className={classes}>{this.state.value}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={this.handleDeincrement}
          className="btn btn-danger btn-sm"
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
