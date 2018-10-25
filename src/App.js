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
          <button onClick={this.props.updateA}>Update A</button>
        </div>

        <div className="col">
          <span>B:</span>
          <span>{this.props.b}</span>
          <button onClick={this.props.updateB}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    a: state.a,
    b: state.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: () => dispatch({ type: "UPDATE_A" }),
    updateB: () => dispatch({ type: "UPDATE_B" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
