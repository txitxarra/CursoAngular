import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artistId: string;

  artista:any = {};

  loading:boolean = true;

  topTracks:any[] = [];

  constructor(private activateRouter: ActivatedRoute,
              private spotifyService: SpotifyService) {

    this.activateRouter.params.subscribe (params => {
      this.artistId = params['id'];
      this.getArtista();
      this.getTopTracks();
    })
  }

  ngOnInit(): void {
  }

  getArtista(){
    this.artista = this.spotifyService.getArtist(this.artistId).subscribe(data =>{
      console.log(data);
      this.artista = data;
      this.loading = false;
    })
  }

  getTopTracks(){
    this.artista = this.spotifyService.getTopTracks(this.artistId).subscribe(data =>{
      console.log(data);
      this.topTracks = data;
    })
  }

}
