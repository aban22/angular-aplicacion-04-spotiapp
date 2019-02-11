import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
        console.log('Spotify service listo');
    }


    getNewReleases() {

        const headers = new HttpHeaders({
            Authorization: 'Bearer BQC1JW6EPmdJZS2qy9QSDWm06NMTreHQCdxpETk2PYkMDov9YIQHwVLmxTXY5DrAZZbg_OQr_yB24IzgLyM'
        });

        this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
                .subscribe(
                    response => {
                        console.log(response);
                    }
                );
    }
}
