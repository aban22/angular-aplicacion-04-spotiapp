import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    nuevasCanciones: any[] = [];
    loading: boolean;
    error: boolean;
    mensajeError: string;

    constructor(private spotifyService: SpotifyService) {
        this.loading = true;
        this.error = false;

        this.spotifyService.getNewReleases().subscribe(
            (response: any) => {
                this.nuevasCanciones = response;
                this.loading = false;
            },
            errorResponse => {
                this.error = true;
                this.loading = false;
                this.mensajeError = errorResponse.error.error.message;
            }
        );
    }

    ngOnInit() {
    }

}
