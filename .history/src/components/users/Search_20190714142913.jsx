import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
    };
    
    onChange = () =
  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
                    value={this.state.text}
                    onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
