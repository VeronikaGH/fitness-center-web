import React, { Component } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
    center: [56.143492, 40.393698],
    zoom: 15
  };
  
  const coordinates = [
    [56.140173, 40.405350]
  ];

  
export default class MyMap extends Component {
 render(){
     return(
        <YMaps>
            <Map defaultState={mapData} width="100%" height="350px" lang="en_US">
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
            </Map>
        </YMaps>
    )}
};

