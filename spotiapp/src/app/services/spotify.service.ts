import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) { }

    getQuery(query: string) {

        const headers = new HttpHeaders({
            Authorization: 'Bearer BQDUvHIINX_Zegtcb47GUdn3D8f8xcb_dZ-sJHkSpN--WqxBYV6TKtqWX6qN4ybaF4gujtc6mkpeZTylApw'
        });

        const url = `https://api.spotify.com/v1${query}`;

        return this.http.get(url, {headers});
    }

    getNewReleases() {
         return this.getQuery('/browse/new-releases?limit=20').pipe(map((response: any) => response['albums'].items));
    }

    getArtistas(termino: string) {
         return this.getQuery(`/search?q=${termino}=&type=artist&limit=15`).pipe(map(response => response['artists'].items));
    }

    getArtista(id: string) {
         return this.getQuery(`/artists/${id}`);
    }

    getTopTracks(id: string) {
         return this.getQuery(`/artists/${id}/top-tracks?country=ES`).pipe(map((response: any) => response['tracks']));
    }

}
