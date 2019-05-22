import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class AnalysService {


    private subject =new Subject<any>();

    constructor(private http: HttpClient) {}

    Analyse(data:string){
        this.subject.next({message:data});
  
      }
      getAnalyse():Observable<any>{
        return this.subject.asObservable();
  
      }
  
}