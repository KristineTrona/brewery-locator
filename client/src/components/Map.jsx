import React, {Component, createRef} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {connect} from 'react-redux'
import {getBreweries} from '../actions/breweries'
import {BeersModal} from './BeersModal'

class BeerMap extends Component{
  
  state = {
      lat: 52.3,
      lng: 4.8,
      zoom: 9,
      selectedBrewery: null,
      currentLocation: null
    }

  mapRef = createRef();

  

  findLocation = () => {
    this.setState({zoom: 12})

    let result = this.searchControl.resultList.results[0]
    this.setState({currentLocation: [parseFloat(result.y), parseFloat(result.x)]})
  }
  

  provider = new OpenStreetMapProvider()

  searchControl = new GeoSearchControl({
    provider: this.provider,
    showMarker: false,
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

  selectBrewery = (breweryId) => {
    this.setState({selectedBrewery: breweryId})
  }

  render(){

    const position = [this.state.lat, this.state.lng]

    const beer = L.icon({
      iconUrl: require('../assets/beer-icon.png'),
      iconSize: [40, 40],
      popupAnchor: [-3, -15],
    })

    const location = L.icon({
      iconUrl: require('../assets/location-image.png'),
      iconSize: [40, 40],
      popupAnchor: [-3, -15],
    })  

    return (
      <div>
        <h2 className="map-title text-center"> Brewery Locator:</h2>
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
                <hr/>
                <button className="btn btn-primary btn-sm" onClick={() => this.selectBrewery(brewery.id)} 
                  data-toggle="modal" data-target="#beersModal">
                  See Beer List
                </button>
              </Popup>
            </Marker>
          )
        } 
        { 
          this.state.currentLocation &&
          <Marker position={this.state.currentLocation} icon={location} >
          </Marker>
        }
        </Map>
        <BeersModal selectedBrewery={this.props.breweries.find(brewery => brewery.id === this.state.selectedBrewery)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BeerMap)


    // if( this.props.breweries && this.props.breweries.length > 0){

    //   this.props.breweries.map(brewery =>        
    //     this.provider.search({ query: `${brewery.zipcode.trim()}`})
    //     .then(function(result) {
    //       console.log(result)
    //     })
    // )}