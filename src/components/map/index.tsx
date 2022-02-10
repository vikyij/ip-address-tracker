import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import MarkerIcon from '../../assets/images/icon-location.svg'

const Icon = new L.Icon({
  iconUrl: MarkerIcon,
  iconRetinaUrl: MarkerIcon,
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
})

interface HeaderProps {
  lat: number
  lng: number
}

const Map: React.FC<HeaderProps> = ({ lat, lng }) => {
  let center: [number, number] = [lat, lng]

  return (
    <div>
      <MapContainer
        // because the center props of MapContainer is immutable, I added the key prop so that the MapContainer can rerender whenever there's a change in the lat and lng
        key={JSON.stringify(center)}
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        doubleClickZoom={true}
        zoomControl={false}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} icon={Icon}></Marker>
      </MapContainer>
    </div>
  )
}

export default Map
