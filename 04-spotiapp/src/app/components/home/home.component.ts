import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'})
export class HomeComponent implements OnInit {

  nuevosReales: any[] = [];

  loading: boolean;
  error: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe( (data: any) => {
      this.nuevosReales = data;
      console.log(this.nuevosReales);
      this.loading = false;
    }, exception => {
      this.error = true;
    });
   }

  ngOnInit(): void {
  }

}
