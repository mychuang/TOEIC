import { Injectable } from '@angular/core';
import { TOEIC } from '../model/TOEIC';
import { MOCK } from '../model/MOCK';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private mock: TOEIC[] = MOCK;

  constructor(private http: HttpClient) { }

  getTOEIC():Observable<TOEIC[]>{
    //const apiUrl = this.serverUrl + 'Financial/getFinancial/' + CLAIM_ID;
    //console.log(apiUrl);

    return of(this.mock);
  }
}
