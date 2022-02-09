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
  lat: number | undefined
  lng: number | undefined
}

const Map: React.FC<HeaderProps> = ({ lat, lng }) => {
  let userPosition: [number, number] = [lat ?? 0, lng ?? 0]
  return (
    <div>
      <MapContainer
        center={userPosition}
        zoom={15}
        scrollWheelZoom={false}
        doubleClickZoom={true}
        zoomControl={false}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={userPosition} icon={Icon}></Marker>
      </MapContainer>
    </div>
  )
}

export default Map