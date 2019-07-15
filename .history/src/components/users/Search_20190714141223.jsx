import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search Users.../>
          <input type="text" className="submit"/>
        </form>
      </div>
    );
  }
}

export default Search;
