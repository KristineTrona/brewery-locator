import React, {Component, createRef} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import * as ELG from 'esri-leaflet-geocoder';

export default class BeerMap extends Component{

  state = {
    lat: 52.3,
    lng: 4.8,
    zoom: 8,
  }

  mapRef = createRef();

  findLocation = () => {
    console.log("test")
  }


	componentDidMount() {

    const map = this.mapRef.current.leafletElement;

    const provider = new OpenStreetMapProvider()

    const searchControl = new GeoSearchControl({
      provider: provider,
      showMarker: true,
      marker: { 
        icon: new L.Icon.Default(),
        draggable: false,
      },
      animateZoom: true,
      autoClose: true,                                   
      searchLabel: 'Enter address'
    })

    map.addControl(searchControl);
    map.on('geosearch/showlocation', this.findLocation)
  }

  

  render(){

    const position = [this.state.lat, this.state.lng]

    const beer = L.icon({
      iconUrl: require('../assets/beer-icon.png'),
      iconSize: [30, 45],
      iconAnchor: [12, 22],
      popupAnchor: [-3, -76],
    })

    const map = (
      <Map className="map" center={position} zoom={this.state.zoom} ref={this.mapRef}>
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={position} icon={beer}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
    return (
      map
    )
  }
}



  //   const map = this.mapRef.current.leafletElement;
    

	// 	const searchControl = new ELG.Geosearch().addTo(map);
	// 	const results = new L.LayerGroup().addTo(map);
		  
	// 	searchControl.on('results', function(data){
	// 		results.clearLayers();
	// 		for (let i = data.results.length - 1; i >= 0; i--) {
	// 			results.addLayer(L.marker(data.results[i].latlng));
	// 		}
  //   })