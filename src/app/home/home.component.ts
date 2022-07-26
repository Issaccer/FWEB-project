import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'List of Games';
  
  games = [ {
  "id": 1,
  "name": "Valorant",
  "image": "./assets/valorant.png"
  },
  {
  "id": 2,
  "name": "Apex Legends",
  "image": "./assets/apex-legends.jpg"
  },
  {
  "id": 3,
  "name": "Minecraft",
  "image": "./assets/minecraft.jpg"
  } ];
}
