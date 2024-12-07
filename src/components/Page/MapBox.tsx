import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as S from './MapBox.styled';
import useMatch from '../../Hooks/useMatch';

const MapBox = ({ name }: { name: string }) => {
  const [zoom, setZoom] = useState(false);
  const mobileS = useMatch(48);

  const mapRef = useRef<mapboxgl.Map | null>(null);
  // Ref para o mapa
  const marker = useRef<HTMLDivElement | null>(null);
  // Ref para o container do mapa
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const mapStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  };

  useEffect(() => {
    // Garantir que o mapa não seja recriado
    if (mapRef.current || !mapContainerRef.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    // Criar o mapa
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/felipe444/cm4aenpp901cc01s3hmdk0mls',
      // style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'mercator',
      interactive: false,
      touchZoomRotate: false,
      doubleClickZoom: false,
    });

    const bounds = new mapboxgl.LngLatBounds();
    if (marker.current) {
      new mapboxgl.Marker({
        element: marker.current,
        anchor: 'bottom',
      })
        .setLngLat([-52.0, -11.0])
        .addTo(map);
    }

    bounds.extend([-52.0, -11.0]);

    map.fitBounds(bounds, {
      maxZoom: zoom ? (mobileS ? 2 : 3.5) : 0,
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [zoom]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (el) => {
        el.forEach((entry) => {
          if (entry.isIntersecting) {
            setZoom(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
    if (mapContainerRef.current) observer.observe(mapContainerRef.current);
  }, []);

  return (
    <S.MapContainer>
      <S.ContainerMaker ref={marker}>
        <S.Name>{name}</S.Name>
        <S.Marker />
      </S.ContainerMaker>
      <S.Map ref={mapContainerRef} style={mapStyle}></S.Map>
    </S.MapContainer>
  );
};

export default MapBox;
