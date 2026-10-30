import { AfterViewInit, Component, OnDestroy, output } from '@angular/core';
import * as L from 'leaflet';
import { LatLng } from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements AfterViewInit, OnDestroy {
  coordinatesEvent = output<LatLng>();
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([47, 8.38], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    this.map.on('click', (event: L.LeafletMouseEvent) => {
      const { lat, lng } = event.latlng;

      this.coordinatesEvent.emit(event.latlng);

      L.popup()
        .setLatLng(event.latlng)
        .setContent(`Breitengrad: ${lat.toFixed(5)}<br>` + `Längengrad: ${lng.toFixed(5)}`)
        .openOn(this.map);
    });
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
