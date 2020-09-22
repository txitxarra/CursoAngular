import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private httpClient: HttpClient) { }

  getQuery(parametros:string){
    const headers: HttpHeaders = new HttpHeaders({
      Authorization : 'Bearer BQD6URAd0cdo0OSM_lqe8X2jLF2-TtPEvlBTFiokyhAn5qx4YNhmRSlYnVVyvYjArnHJV1ouY9ABf_ta2f_GVi_ldqW61yh2YhgrxQSnIiZru73sLTHWc4dIMRWU1rN34lCX4XQawqmWoLkoyIpU5Ts'
    });
    return this.httpClient.get('https://api.spotify.com/v1/' + parametros, {headers} );
  }

  getNewReleases(): Observable< any >{
   
    return this.getQuery('browse/new-releases').pipe(map( data => {
       return data[ 'albums' ].items;
    }));
  }
  
  
  getArtists(artist: string): Observable< any >{
    
    return this.getQuery('search?q=' + artist + '&type=artist').pipe(map( data =>{
      return data['artists'].items;
    }));
  }

  getArtist(artist: string): Observable< any >{
    
    return this.getQuery(`artists/${artist}`);
  }

  getTopTracks(artist: string): Observable< any >{
    
    return this.getQuery(`artists/${artist}/top-tracks?country=es`).pipe(map(data => {
      return data['tracks'];

    }));
  }

}
