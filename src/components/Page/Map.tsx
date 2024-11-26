import React from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';

import * as S from './Map.styled';

const Map = ({ name }: { name: string }) => {
  const customTilerLayer = () => {
    return import.meta.env.VITE_MAPBOX_TOKEN ? (
      <TileLayer
        attribution='&copy; © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${
          import.meta.env.VITE_MAPBOX_USERID
        }/${
          import.meta.env.VITE_MAPBOX_STYLE
        }/tiles/256/{z}/{x}/{y}@2x?access_token=${
          import.meta.env.VITE_MAPBOX_TOKEN
        }`}
      />
    ) : (
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    );
  };

  return (
    <S.Container>
      <MapContainer
        center={[-14.235, -51.9253]}
        zoom={4}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={false}
        doubleClickZoom={false}
        touchZoom={false}
      >
        {customTilerLayer()}

        <Marker position={[-14.235, -51.9253]}>
          <Tooltip direction="top" offset={[-18, -10]} opacity={1} permanent>
            {name}
          </Tooltip>
        </Marker>
      </MapContainer>
    </S.Container>
  );
};

export default Map;
