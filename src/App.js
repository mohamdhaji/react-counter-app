import React, { Component } from "react";
import "./Resources/style.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { AiOutlineReload as Refresh } from "react-icons/ai";

export default class App extends Component {
  state = {
    total: 0,
    // counters: [0, 0, 0, 0],
    counters: [
      { value: 0, id: 0 },
      { value: 0, id: 1 },
      { value: 0, id: 2 },
      { value: 0, id: 3 },
    ],
  };

  add = (id) => {
    this.setState(
      (prevState) => {
        let total = this.state.total;

        let newCounters = prevState.counters.slice();
        newCounters = newCounters.map((counter) => {
          if (counter.id == id) {
            if (counter.value === 0) total += 1;
            counter.value = counter.value + 1;
          }
          return counter;
        });
        return { counters: newCounters, total };
      }
      // () => console.log(this.state)
    );

    // const counters = [...this.state.counters];

    // let count = counters[i];
    // let total = this.state.total;
    // if (count === 0) total += 1;

    // count++;
    // counters[i] = count;
    // this.setState({ counters, total });
  };

  minus = (id) => {
    this.setState(
      (prevState) => {
        let total = this.state.total;

        let newCounters = prevState.counters.slice();
        newCounters = newCounters.map((counter) => {
          if (counter.id === id) {
            if (counter.value > 0) {
              if (counter.value === 1) total -= 1;
              counter.value = counter.value - 1;
            }
          }
          return counter;
        });
        return { counters: newCounters, total };
      }
      // () => console.log(this.state)
    );

    // if (this.state.counters[i] > 0) {
    //   const counters = [...this.state.counters];
    //   let count = counters[i];
    //   let total = this.state.total;
    //   if (count === 1) total -= 1;
    //   count--;
    //   counters[i] = count;
    //   this.setState({ total, counters });
    // }
  };

  refresh = () => {
    const counters = [...this.state.counters].map((counter) => {
      return { value: 0, id: counter.id };
    });

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
          {this.state.counters.map((count) => {
            return (
              <Counter
                add={() => this.add(count.id)}
                minus={() => this.minus(count.id)}
                key={count.id}
                count={count.value}
              ></Counter>
            );
          })}
        </div>
      </>
    );
  }
}
