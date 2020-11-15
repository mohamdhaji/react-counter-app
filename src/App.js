import React, { Component } from "react";
import "./Resources/style.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { AiOutlineReload as Refresh } from "react-icons/ai";

export default class App extends Component {
  state = {
    total: 0,
    counters: [0, 0, 0, 0],
  };

  add = (i) => {
    const counters = [...this.state.counters];
    let count = counters[i];
    let total = this.state.total;
    if (count === 0) total += 1;

    count++;
    counters[i] = count;
    this.setState({ counters, total });
  };

  minus = (i) => {
    if (this.state.counters[i] > 0) {
      const counters = [...this.state.counters];
      let count = counters[i];
      let total = this.state.total;
      if (count === 1) total -= 1;
      count--;
      counters[i] = count;
      this.setState({ total, counters });
    }
  };

  refresh = () => {
    const counters = [0, 0, 0, 0];
    this.setState({ counters, total: 0 });
  };

  render() {
    return (
      <>
        <Header total={this.state.total}></Header>
        <div className="counters-container">
          <div
            onClick={this.refresh}
            style={{
              background: "#4CAF50",
              paddingTop: "5px",
              width: "32px",
              paddingLeft: "5px",
              marginRight: "8px",
              marginLeft: "22px",
              borderRadius: "3px",
            }}
          >
            <Refresh color="white" size="26px" />
          </div>
          {this.state.counters.map((count, i) => {
            return (
              <Counter
                add={() => this.add(i)}
                minus={() => this.minus(i)}
                key={i}
                count={count}
              ></Counter>
            );
          })}
        </div>
      </>
    );
  }
}
