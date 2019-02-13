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
            Authorization: 'Bearer BQAWA1cBlfNcH2tz3SS5IvitiAdvz-foTgI81O1lrh0TP6Dv_UjnMj-QOSsdfrQYtziACzvUyLb6JjTLaSo'
        });

        return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
    }

    getArtista(termino: string) {
        const headers = new HttpHeaders({
            Authorization: 'Bearer BQAWA1cBlfNcH2tz3SS5IvitiAdvz-foTgI81O1lrh0TP6Dv_UjnMj-QOSsdfrQYtziACzvUyLb6JjTLaSo'
        });

        return this.http.get(`https://api.spotify.com/v1/search?q=${termino}=&type=artist&limit=15`, {headers});
    }
}
