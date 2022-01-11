import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})

export class PetService {

  private readonly _responseUrl: string;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
    this._responseUrl = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this._responseUrl)
      .pipe(
        map(pets => pets.sort((p1: Pet, p2: Pet) => p1.name.localeCompare(p2.name)))
      );
  }

  addPet(pet: Pet): Observable<Pet> {
    console.log(pet.name);
    console.log(pet.kind);
    console.log(pet.profileText);
    console.log(pet.image);
    console.log(pet.popularity);
    return this.http.post<Pet>(this._responseUrl, pet, this.httpOptions);
  }

}
