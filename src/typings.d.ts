import * as L from 'leaflet';

// Declare the leaflet module so we can modify it
declare module 'leaflet' {

  // We want to alter the control namespace
  namespace control {

    // Define minimal type information for the coordinates function
    function gps(options: any): any;

  }
}