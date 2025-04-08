import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponceModel } from '../app/model/task';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiUrl: string = 'http://freeapi.gerasim.in/api/JWT/';

  constructor(private http: HttpClient) {}

  getAllTaskList(): Observable<ApiResponceModel> {
    return this.http.get<ApiResponceModel>(this.apiUrl + 'GetAllTaskList');
  }
}
