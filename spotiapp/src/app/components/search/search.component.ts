import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

    artistas: any[] = [];

    constructor(private spotifyService: SpotifyService) { }

    buscar(termino: string) {
        console.log(termino);
        this.spotifyService.getArtista(termino).subscribe(
            (response: any) => {
                console.log(response.artists.items);
                this.artistas = response.artists.items;
            }
        );
     }

}
