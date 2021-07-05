import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ambulance';
  lat = 51.678418;
  lng = 7.809007;
  ngOnInit() {
    
  }
}
