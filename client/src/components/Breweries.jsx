import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBreweries} from '../actions/breweries'

class Breweries extends Component{

  componentDidMount(){
    this.props.getBreweries()
  }

  render(){

  //   const wortelImage = L.icon({
  //     iconUrl: require('../images/wortel-icon.png'),
  //     iconSize: [23, 45],
  //     iconAnchor: [12, 22],
  //     popupAnchor: [-3, -76],
  //     shadowUrl: require('../images/wortel-shadow.png'),
  //     shadowSize: [30, 41 ],
  //     shadowAnchor: [3, 17]
  // });

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