import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'List of Games';
  
  games = [ {
  "id": 1,
  "name": "Valorant",
  "description": "Tires for city use",
  "image": "./assets/valorant.png"
  },
  {
  "id": 2,
  "name": "Apex Legends",
  "description": "Tires for all conditions",
  "image": "./assets/apex-legends.jpg"
  },
  {
  "id": 3,
  "name": "Minecraft",
  "description": "Tires for all luxury models",
  "image": "./assets/minecraft.jpg"
  } ];
}
