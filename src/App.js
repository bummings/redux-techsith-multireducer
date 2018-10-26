import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <span>A:</span>
          <span>{this.props.a}</span>
          <button onClick={() => this.props.updateA(this.props.b)}>
            Update A
          </button>
        </div>

        <div className="col">
          <span>B:</span>
          <span>{this.props.b}</span>
          <button onClick={() => this.props.updateB(this.props.a)}>
            Update B
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    a: state.rA.a,
    b: state.rB.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: b => dispatch({ type: "UPDATE_A", b: b }),
    updateB: a => dispatch({ type: "UPDATE_B", a: a })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
