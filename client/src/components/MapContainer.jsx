import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBreweries} from '../actions/breweries'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
class MapContainer extends Component{

  state = {
    lat: 52.3,
    lng: 4.8,
    zoom: 9,
  }

  componentDidMount(){
    this.props.getBreweries()
  }

  render(){
    const position = [this.state.lat, this.state.lng]

    const map = (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>

    );

    return (
      map
    );
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