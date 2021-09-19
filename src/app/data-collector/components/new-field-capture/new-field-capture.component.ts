import { Component, OnInit } from '@angular/core';
import  * as L from 'leaflet'; 

import "./leaflet-gps/leaflet-gps.js";

@Component({
  selector: 'app-new-field-capture',
  templateUrl: './new-field-capture.component.html',
  styleUrls: ['./new-field-capture.component.css', './leaflet-gps/leaflet-gps.css']
})
export class NewFieldCaptureComponent implements OnInit {
  map: any;
  marker: any;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
        this.initMap();
      }, 500);
  }

  initMap(): void {
    this.map = L.map("map").setView([10,11], 13);
    let basemaps = {
      "Street Map": L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
      }),
      "Aerial View": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
      })
    };

    let layer = L.control.layers(basemaps);

    this.marker = L.marker([10,11],  {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/images/map/marker-icon.png',
        shadowUrl: 'assets/images/map/marker-shadow.png'
      })
    });
    (basemaps["Street Map"]).addTo(this.map);
    layer.addTo(this.map);
    this.marker.addTo(this.map);

    let gps = L.control.gps({
      //autoActive:true,
      autoCenter:true
    });//inizialize control

    gps
    .on('gps:located', (e: any) =>{
      //  e.marker.bindPopup(e.latlng.toString()).openPopup()
      console.log(e.latlng, this.map.getCenter())
    })
    .on('gps:disabled', function(e: any) {
      e.marker.closePopup()
    });

    gps.addTo(this.map);
  }

  invalidateSize(): void {
    setTimeout(() => {
        this.map.invalidateSize();
      }, 500);
  }

}
