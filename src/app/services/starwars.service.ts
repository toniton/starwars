import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { endpoints } from '../config/endpoint';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarwarsService {
    public id: string;
    constructor(private http: HttpClient) { };
    people(): Observable<Response> {
        console.log('reached here');
        return this.http.get<ApiResponse>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PEOPLE));
    };
    findPeople(name): Observable<Response> {
        return this.http.get<ApiResponse>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PEOPLE), {
            params: {
                search: name
            }
        });
    };
    fetchPerson(id): Observable<Response> {
        return this.http.get<ApiResponse>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PEOPLE, id));
    };
    fetchPersonByUrl(url): Observable<Response> {
        return this.http.get<ApiResponse>(url);
    };

    planets(id): Observable<Response> {
        return this.http.get<ApiResponse>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PLANETS, id));
    };

    planet(url): Observable<Response> {
        return this.http.get<ApiResponse>(url);
    };

    starships(id: string): Observable<Response> {
        return this.http.get<ApiResponse>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.STARSHIPS, id));
    }
}
