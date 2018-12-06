import React, {Component, createRef} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {connect} from 'react-redux'
import {getBreweries} from '../actions/breweries'

class BeerMap extends Component{
  
  state = {
      lat: 52.3,
      lng: 4.8,
      zoom: 9,
    }

  mapRef = createRef();

  findLocation = () => {
    console.log("test")
  }

  provider = new OpenStreetMapProvider()

  searchControl = new GeoSearchControl({
    provider: this.provider,
    showMarker: true,
    marker: { 
      icon: new L.Icon({
        iconUrl: require('../assets/beer-icon.png'),
        iconSize: [30, 45],
        popupAnchor: [-3, -15],
      }),
      draggable: false,
    },
    animateZoom: true,
    autoClose: true,                                   
    searchLabel: 'Enter address'
  })


	componentDidMount() {

    this.props.getBreweries()

    const map = this.mapRef.current.leafletElement;
    map.addControl(this.searchControl);
    map.on('geosearch/showlocation', this.findLocation)

  }  

  render(){

    const position = [this.state.lat, this.state.lng]

    const beer = L.icon({
      iconUrl: require('../assets/beer-icon.png'),
      iconSize: [40, 40],
      popupAnchor: [-3, -15],
    })

    const map = (
      <Map className="map" center={position} zoom={this.state.zoom} ref={this.mapRef}>
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {this.props.breweries && this.props.breweries.length > 0 &&
          this.props.breweries.map(brewery =>
            <Marker position={[brewery.lat, brewery.lng]} icon={beer} key={brewery.id}>
              <Popup>
                <strong>{brewery.name}</strong>
                <hr/>
                {brewery.address} {brewery.zipcode}, {brewery.city}
              </Popup>
            </Marker>
          )
        }
      </Map>
    )

    
    return (
      map
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

export default connect(mapStateToProps, mapDispatchToProps)(BeerMap)


    // if( this.props.breweries && this.props.breweries.length > 0){

    //   this.props.breweries.map(brewery =>        
    //     this.provider.search({ query: `${brewery.zipcode.trim()}`})
    //     .then(function(result) {
    //       console.log(result)
    //     })
    // )}