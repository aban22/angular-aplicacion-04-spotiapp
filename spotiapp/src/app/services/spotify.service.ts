import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
        console.log('Spotify service listo');
    }

    getQuery(query: string) {

        const headers = new HttpHeaders({
            Authorization: 'Bearer BQAWA1cBlfNcH2tz3SS5IvitiAdvz-foTgI81O1lrh0TP6Dv_UjnMj-QOSsdfrQYtziACzvUyLb6JjTLaSo'
        });

        const url = `https://api.spotify.com/v1${query}`;

        return this.http.get(url, {headers});
    }

    getNewReleases() {
         return this.getQuery('/browse/new-releases?limit=20').pipe(map((response: any) => response['albums'].items));
    }

    getArtista(termino: string) {
         return this.getQuery(`/search?q=${termino}=&type=artist&limit=15`).pipe(map(response => response['artists'].items));
    }
}
