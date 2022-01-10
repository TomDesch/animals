import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class PetService {

  private responseUrl: string;

  constructor(private http: HttpClient) {
    this.responseUrl = `${environment.backendUrl}/pets`;
  }


}
