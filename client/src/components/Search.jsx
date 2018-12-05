import React from 'react'
import { ReactLeafletSearch } from 'react-leaflet-search'


const Search = (props) => (
  props &&
  <ReactLeafletSearch position="topleft" />
)

export default Search




// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import { MapControl } from 'react-leaflet';

// export default class SearchBar extends MapControl{
//   constructor(props){
//     super(props);
//   }

//   createLeafletElement() {
//     return GeoSearchControl({
//       provider: new OpenStreetMapProvider(),
//       style: 'bar',
//       showMarker: true,
//       showPopup: false,
//       autoClose: true,
//       retainZoomLevel: false,
//       animateZoom: true,
//       keepResult: false,
//       searchLabel: 'search'
//     });
//   }
// }