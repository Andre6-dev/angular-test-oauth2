import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetResourceServerService {

  constructor(private httpClient: HttpClient) { }

  public breeds(): Observable<any> {
    return this.httpClient.get<any>('/api/v1/breeds');
  }
}
