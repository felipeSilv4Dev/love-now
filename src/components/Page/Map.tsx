// import { useEffect, useState } from 'react';
import {
  Circle,
  LayerGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from 'react-leaflet';
import L, { map } from 'leaflet';
import * as S from './Map.styled';
import { Image } from '../../styles/Image.styled';

const Map = () => {
  // const pointerMap = L.icon({
  //   iconUrl: '../../utils/pointer-map.png',
  // });

  // L.marker([-14.235, -51.9253], { icon: pointerMap }).addTo();

  return (
    <S.Container>
      <MapContainer
        center={[-14.235, -51.9253]}
        zoom={3.45}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[-14.235, -51.9253]}>
          <Popup>Camilla</Popup>
          <Tooltip direction="top" offset={[-18, -10]} opacity={1} permanent>
            son goku
          </Tooltip>
        </Marker>
      </MapContainer>
    </S.Container>
  );
};

export default Map;
