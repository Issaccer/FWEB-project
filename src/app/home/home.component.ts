import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private list: PostsService) { }

  listing: any = []

  ngOnInit(): void{
  };

  title = 'List of Games';

  games = [{
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
  },
  {
    "id": 4,
    "name": "Genshin Impact",
    "image": "./assets/Genshin-Impact.jpg"
  },
  {
    "id": 5,
    "name": "Mortal Kombat 11",
    "image": "./assets/mortal kombat 11.jpg"
  },
  ];
}

