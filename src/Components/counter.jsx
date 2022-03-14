import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2"],
  };

  handleIncrement = () =>{
    console.log("Success");
    this.state.count += 1;
  }

  renderTags(){
    if(this.state.tags.length === 0) return <p>Theres no tags!</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)} </ul>;
  }

  render() {
    return (
      <div>
        <span className="badge bg-warning -m2">{this.state.count}</span>
      <button onClick={this.handleIncrement} className ='btn btn-secondary btn-sm'>+</button>
      {this.renderTags()}
      </div>
    );
  }


}

export default Counter;
