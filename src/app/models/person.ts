import { Vehicle } from './vehicle';
import { Starship } from './starship';
import { Specie } from './specie';
import { Film } from './film';
import { BaseModel } from '../config/base-model';

export class Person extends BaseModel {
    birth_year: string;
    eye_color: string;
    films: Array<Film> = [];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    created: string;
    edited: string;
    species: Array<Specie> = [];
    starships: Array<Starship> = [];
    url: string;
    vehicles: Array<Vehicle> = [];
}
