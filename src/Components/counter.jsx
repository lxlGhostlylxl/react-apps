import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = () => {
    this.setState({ value: (this.state.value += 1) });
  };

  handleDeincrement = () => {
    if (this.state.value > 0) this.setState({ count: (this.state.value -= 1) });
  };

  formatIndex() {
    const { count } = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }

  render() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "bg-warning" : "bg-primary";

    return (
      <div>
        <span className={classes}>{this.formatIndex()}</span>

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

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
