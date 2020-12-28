import { Component } from '@angular/core';
import * as L from "leaflet";
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage  {

  map:L.Map;

  constructor() { }

  ngOnInit(){
    this.map = L.map('map',{
      center: [-17.3925639,-66.1920537],
      zoom:15,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:'&copy: <a href="http://openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map)

    this.addHomeMarker()

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  addHomeMarker(){
    const homeMarker= L.marker({lat: -17.3925639,lng: -66.1920537})
    homeMarker.bindPopup('Atencion de 9:00AM a 6:00PM', {
      closeButton:true
    })
    homeMarker.addTo(this.map)
  }


}
