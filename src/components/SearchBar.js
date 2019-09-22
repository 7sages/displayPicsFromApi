import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> image search </label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
