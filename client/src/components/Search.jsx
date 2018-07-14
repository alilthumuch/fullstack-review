import React from 'react';
import RepoList from './RepoList.jsx'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this)
  }

  onChange (e) {
    console.log(e.target.value)
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;