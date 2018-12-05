import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBreweries} from '../actions/breweries'
import BeerMap from './Map'

class MapContainer extends Component{

  componentDidMount(){
    this.props.getBreweries()
  }

  render(){
    return(
      <div className="container">
        <BeerMap/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)