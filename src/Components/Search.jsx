import  { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div  id="header">
         <div id="search">
          <h3>Search</h3>
        <input type="text" placeholder='Enter Something' 
        onChange={(e) => this.props.handleSearch(e.target.value)}/>
        </div>
      </div>
    )
  }
}

