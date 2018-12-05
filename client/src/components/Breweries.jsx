import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBreweries} from '../actions/breweries'

class Breweries extends Component{

  componentDidMount(){
    this.props.getBreweries()
  }

  render(){

    return (
      <div>
        Test
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
   breweries: state.breweries
  }
}
  
const mapDispatchToProps = {
  getBreweries
}

export default connect(mapStateToProps, mapDispatchToProps)(Breweries)