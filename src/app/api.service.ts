import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Election } from './Election';
import { Observable } from 'rxjs';


const localUrl = 'assets/data/Election.json';

@Injectable({
 providedIn: 'root'
  
})
export class ApiService {
  form: any;
  headers: any;
  api: any;

  constructor(private http: HttpClient) { 
    
  
  }
}
