import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectionProgram } from '../../model/ElectionProgram';

@Injectable({
  providedIn: 'root'
})
export class ElectionProgramService {

  constructor(private http: HttpClient) { }

  getElectionProgramByStateId(stateId: any): Observable<ElectionProgram[]> {
    //return this.http.get(environment.apibaseurl+'Product/ProductList');
    return this.http
      .get<ElectionProgram[]>(`https://api.truevoter.in/True_Voter/getelectionprogram?stateId=${stateId}`)
      .pipe(((res) => res));
  }
}
