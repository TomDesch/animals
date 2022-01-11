import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})

export class PetService {

  private readonly _responseUrl: string;

  get responseUrl(): string {
    return this._responseUrl;
  }

  constructor(private http: HttpClient) {
    this._responseUrl = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this._responseUrl)
      .pipe(
        map(pets => pets.sort((p1: Pet, p2: Pet) => p1.name.localeCompare(p2.name)))
      );
  }

}
