import L from 'leaflet';
import { PMTiles } from 'pmtiles';
import { leafletLayer } from 'protomaps-leaflet';
import css from 'leaflet/dist/leaflet.css?raw';

class CapacitorMap extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        ${css}
        :host {
          display: block;
          width: 100%;
          height: 100vh;
        }
        #map {
          width: 100%;
          height: 100vh;
        }
      </style>
      <div id="map"></div>
    `;
  }

  async connectedCallback() {
    const mapContainer = this.shadowRoot.querySelector('#map');

    const mapFile = '/map.pmtiles';

    const pmtiles = new PMTiles(mapFile);
    const header = await pmtiles.getHeader();
    
    const bounds = [[header.minLat, header.minLon], [header.maxLat, header.maxLon]];
    
    const map = L.map(mapContainer, {
      maxBounds: bounds,
      maxBoundsViscosity: 0,
      minZoom: 0,
      maxZoom: header.maxZoom || 15,

    });
    
    map.fitBounds(bounds);
    
    const layer = leafletLayer({ url: mapFile, theme: 'light' });
    layer.addTo(map);
  }
}

customElements.define('capacitor-map', CapacitorMap);
