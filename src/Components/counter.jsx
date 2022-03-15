import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";

    return (
      <div>
        <span className={classes}>{this.formatIndex()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
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
  formatIndex() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
