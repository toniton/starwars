import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { endpoints } from '../config/endpoint';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Planet } from '../models/planet';
import { Person } from '../models/person';

@Injectable()
export class StarwarsService {

    constructor(private http: HttpClient) { };

    getPersonIdFromUrl(url: string) {
        return url.replace('https://swapi.co/api/people/', '').replace('/', '');
    }

    getPageNumberFromUrl(url: string) {
        return parseInt(url.replace('https://swapi.co/api/people/?page=', ''), 10);
    }

    people(page: any = null): Observable<Array<Person>> {
        if (page !== null) {
            return this.http.get<Array<Person>>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PEOPLE), {
                params: {
                    page: page
                }
            });
        }
        return this.http.get<Array<Person>>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PEOPLE));
    };

    findPeople(name: string = ''): Observable<Array<Person>> {
        return this.http.get<Array<Person>>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PEOPLE), {
            params: {
                search: name
            }
        });
    };

    fetchPerson(id): Observable<Array<Person>> {
        return this.http.get<Array<Person>>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PEOPLE, id));
    };

    fetchPersonByUrl(url): Observable<Array<Person>> {
        return this.http.get<Array<Person>>(url);
    };

    findPlanet(id): Observable<Array<Planet>> {
        return this.http.get<Array<Planet>>(''.concat(environment.API_URL, '/', environment.PREFIX, '/', endpoints.PLANETS, id));
    };

    fetchPlanetByUrl(url): Observable<Array<Planet>> {
        return this.http.get<Array<Planet>>(url);
    };
}
