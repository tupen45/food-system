import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Popup } from 'react-leaflet'
import { Marker } from 'react-leaflet'
import { useState } from 'react'
import { useMapEvents } from 'react-leaflet'
import './map.css'
import In from './in.json'
import { routing } from 'leaflet'
import L from 'leaflet';
import Routing from './Routing'




const Map=()=>{
  // L.Routing.control({
  //   waypoints: [
  //     L.latLng(57.74, 11.94),
  //     L.latLng(57.6792, 11.949)
  //   ]
  // }).addTo(Map);
 
  
    return <MapContainer center={[25.7407118, 88.2602625]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
 
    {/* {
      In.map((data=>{ return(
        <Marker position={[data.lat, data.lng]}>
        <Popup>
          {data.city} <br /> {data.population}
        </Popup>
      </Marker>)
         
      }))

    } */}
  <Routing/>
  </MapContainer>
  
}
export default Map;