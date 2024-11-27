import React from 'react';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import s from "./style.module.css"

const YandexMap: React.FC = () => {
  const address = 'г. Санкт-Петербург, Комсомольская, 43 к1';
  const coordinates = [59.830499, 30.142152]; // Примерные координаты для адреса

  return (
    <YMaps query={{
         apikey: '5f673db6-f7d5-4971-ac21-8c984dad1b86'
    }}>
      <Map className={s.map}
        defaultState={{ center: coordinates, zoom: 15 }} 
        style={{ width: '100%', height: '400px' }}
      >
        <Placemark 
          geometry={coordinates} 
          properties={{
            balloonContent: address,
          }} 
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
