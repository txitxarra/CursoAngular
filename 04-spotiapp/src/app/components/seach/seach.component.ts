import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styles: [
  ]
})
export class SeachComponent {

  artistas: any[] = [];

  loading:boolean = false;

  constructor(private spotifyService:SpotifyService) { }

  buscar(artista:string){
    this.loading = true;
    console.log(artista);
    this.spotifyService.getArtists(artista).subscribe( (data: any) => {
      this.artistas = data;
      console.log(this.artistas);
      this.loading = false;
    });
  }
}
