import { Component, OnInit } from '@angular/core';
//import ActivatedRoute class into the component
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  post: any = []
  _id: any = ""; 
  private sub: any;

  //inject the ActivatedRoute class into the component
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService) {}

  //override our ngOnInit lifecycle hook function
  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.postsService.getSelected(this._id).subscribe((data: any) => {
      this.post = data
      console.log('this.post: ', this.post)
    });
  }

  deletePost(_id: number){
    this.postsService.deletePost(_id).subscribe(results => {
    location.replace("/home");
    });
  }

  title = 'List of Games';

  games = [{
    "id": 1,
    "name": "Valorant",
    "image": "./assets/valorant.png",
    "description": "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games.",
    "type": "FPS"
  },
  {
    "id": 2,
    "name": "Apex Legends",
    "image": "./assets/apex-legends.jpg",
    "description": "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts.",
    "type": "Battle Royale"
  },
  {
    "id": 3,
    "name": "Minecraft",
    "image": "./assets/minecraft.jpg",
    "description": "Minecraft is a 3D survival sandbox game developed and published by Mojang, spanning multiple platforms. It was originally created by the independent video game designer Markus Persson in 2009, before giving the development to Jens Bergensten in 2011. The game has no specific goals to accomplish, allowing players a large amount of freedom in choosing how to play the game.",
    "type": "Adventure"
  },
  {
    "id": 4,
    "name": "Genshin Impact",
    "image": "./assets/Genshin-Impact.jpg",
    "description": "Genshin Impact is a free-to-play action role-playing game developed and published by miHoYo Co., Ltd. The game features a fantasy open-world environment and action based combat system using elemental magic, character switching, and gacha monetization system for players to obtain new characters, weapons, and other resources.",
    "type": "RPG"
  },
  {
    "id": 5,
    "name": "Mortal Kombat 11",
    "image": "./assets/mortal kombat 11.jpg",
    "description": "Mortal Kombat 11 is a 2019 fighting game developed by NetherRealm Studios and published by Warner Bros. Interactive Entertainment.",
    "type": "Fighting"
  },
  ];

}
