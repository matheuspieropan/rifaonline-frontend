import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CampanhaRequest } from '../model/request/campanha-request';
import { Observable } from 'rxjs';
import { CamapanhaResponse } from '../model/response/campanha-response';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {

  endpoint = 'http://localhost:8080/campanha'

  constructor(private http: HttpClient) { }

  cadastrar(campanha: CampanhaRequest): Observable<CamapanhaResponse> {
    return this.http.post(this.endpoint, campanha);
  }
}