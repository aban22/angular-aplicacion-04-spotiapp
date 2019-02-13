import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    nuevasCanciones: any[] = [];

    constructor(private spotifyService: SpotifyService) {
        this.spotifyService.getNewReleases().subscribe(
            (response: any) => {
                console.log(response.albums.items);
                this.nuevasCanciones = response.albums.items;
            }
        );
    }

    ngOnInit() {
    }

}
