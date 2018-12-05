import React, { Component } from 'react';


export default class Search extends Component {

  // state = {
  //   location: '',
  // }

  // onChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // onSubmit = (event) => {
  //   event.preventDefault()
  //   if (event.target.location.value)
  //   this.setState({
  //       location: ''
  //   })
  //   this.findBreweries(this.state.location)
  // }

  // findBreweries = (event) => {
  //   this.setState({
  //     location: event
  //   })
  //   this.props.loadBreweries(event)
  // }

  render() {
    return (
      <form className="location-search-form mx-auto input-group">
        {/* <input className="form-control" placeholder="Location..."
          value={this.state.location} name="location" onChange={this.onChange}/>
        <div className="input-group-append">
            <button className="btn btn-primary" type="button">Search</button>
        </div> */}
      </form>
    )
  }
}
